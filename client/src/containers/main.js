import React, {Component} from 'react';
import SideNav from '../components/SideNav.js';
import TopNav from '../components/TopNav.js';
import MeetingsList from '../components/MeetingsList.js';
import ScheduleMeeting from '../components/ScheduleMeeting.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './main.css';

class Main extends Component {

        constructor(props) {
            super(props)
            this.state = {
                meetingsList: [],
                usersList: [],
                newMeeting: {}
            }

            this.fetchMeetingsList = this.fetchMeetingsList.bind(this);
            this.postNewMeeting = this.postNewMeeting.bind(this);
        }

        postNewMeeting(newMeetingObject) {
            console.log(newMeetingObject)

            const postUrl = "https://coding-test.ajenta.io/meetings";
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
            const meetingsUrl = "https://coding-test.ajenta.io/meetings";

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
            const usersUrl = "https://coding-test.ajenta.io/users";

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