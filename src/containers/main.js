import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

class Main extends Component {

        constructor(props) {
            super(props)
            this.state = {
                meetingsList: []
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
                        meetingsList: meetingsList
                    }
                }, () => {
                    console.log(this.state.meetingsList)
                })
            })
            .catch(err => console.error(err))
        }

        componentDidMount() {
            this.fetchMeetingsList();
        }

        render() {
            return (
                <h1>Hello</h1>
            )
        }

}

export default Main;