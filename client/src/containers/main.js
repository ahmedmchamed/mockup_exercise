import React, {Component} from 'react';
import MeetingsList from '../components/MeetingsList.js';
import ScheduleMeeting from '../components/ScheduleMeeting.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Main extends Component {

        constructor(props) {
            super(props)
            this.state = {
                meetingsList: [],
                usersList: []
            }

            this.fetchMeetingsList = this.fetchMeetingsList.bind(this);
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

        render() {
            return (
                <Router>
                    <>
                        <Route 
                            path="/home"
                            render={() => 
                                <MeetingsList
                                    usersList={this.state.usersList} 
                                    meetingsList={this.state.meetingsList} 
                                />
                            }
                        />
                        <Route 
                            path="/schedule"
                            render={() => 
                                <ScheduleMeeting />
                            }
                        />
                    </>
                </Router>
            )
        }

}

export default Main;