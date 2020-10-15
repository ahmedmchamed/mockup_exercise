import React, {Component} from 'react';
import SideNav from '../components/SideNav.js';
import TopNav from '../components/TopNav.js';
import MeetingsList from '../components/MeetingsList.js';
import ScheduleMeeting from '../components/ScheduleMeeting.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './main.css';
require('dotenv').config();

class Main extends Component {

        constructor(props) {
            super(props)
            this.state = {
                meetingsList: [],
                usersList: [],
                newMeeting: {}
            }

            this.postNewMeeting = this.postNewMeeting.bind(this);
            this.fetchMeetingsList = this.fetchMeetingsList.bind(this);
            this.fetchUsersList = this.fetchUsersList.bind(this);
        }

        postNewMeeting(newMeetingObject) {
            console.log(newMeetingObject)

            const postUrl = process.env.REACT_APP_POSTMEETING;
            fetch(postUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMeetingObject)
            })
            .then(res => res.json())
            .then(data => {
                const newMeeting = {
                    callid: this.state.meetingsList.length + 1,
                    name: data.name,
                    start_time: data.start_time,
                    end_time: data.end_time,
                    owner: parseInt(data.owner)
                }

                this.setState((prevState) => {
                    return {...prevState, newMeeting: newMeeting}
                }, () => console.log(this.state.newMeeting))
            });
        }

        fetchMeetingsList() {
            const meetingsUrl = process.env.REACT_APP_GETMEETINGS;

            fetch(meetingsUrl)
            .then(res => res.json())
            .then(meetingsList => {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        meetingsList: meetingsList
                    }
                }, () => console.log(this.state.meetingsList))
            })
            .catch(err => console.error(err));
        }

        fetchUsersList() {
            const usersUrl = process.env.REACT_APP_GETUSERS;

            fetch(usersUrl)
            .then(res => res.json())
            .then(usersList => {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        usersList: usersList
                    }
                }, () => console.log(this.state.usersList))
            })
            .catch(err => console.error(err));
        }

        componentDidMount() {
            console.log(process.env.REACT_APP_GETUSERS)
            this.fetchMeetingsList();
            this.fetchUsersList();
        }

        componentDidUpdate(prevProps, prevState) {
            if (prevState.newMeeting !== this.state.newMeeting) {
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        meetingsList: [...this.state.meetingsList, this.state.newMeeting]
                    }
                }, () => console.log(this.state.meetingsList))
            }
        }

        render() {
            return (
                <Router>
                    <>
                        <div id="main-container">
                            <SideNav />
                            <TopNav />
                            <Switch>
                                <Route 
                                    path="/home"
                                    render={(props) => 
                                        <MeetingsList
                                            {...props}
                                            usersList={this.state.usersList} 
                                            meetingsList={this.state.meetingsList}
                                        />
                                    }
                                />
                                <Route 
                                    path="/schedule"
                                    render={() => 
                                        <ScheduleMeeting 
                                            usersList={this.state.usersList}
                                            handleNewMeeting={this.postNewMeeting}
                                        />
                                    }
                                />
                            </Switch>
                        </div>
                    </>
                </Router>
            )
        }

}

export default Main;