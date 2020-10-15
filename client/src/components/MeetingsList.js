import React from 'react';
import UsersList from './UsersList.js';
import './meetinglist.css';

const MeetingsList = ({meetingsList, usersList}) => {

    console.log(meetingsList)
    const meetings = meetingsList.map((meeting, index) => {
        return <UsersList
                    key={index}
                    usersList={usersList}
                    meetingsList={meetingsList} 
                    callId={meeting.callid}
                    meetingName={meeting.name}
                    meetStartTime={meeting.start_time}
                    meetEndTime={meeting.end_time}
                    owner={meeting.owner}  
                />
    })

    return (
        <>
            <h3 id="scheduled-meetings-title">SCHEDULED MEETINGS ({meetings.length})</h3>
            <div className="scheduled-meetings">
                <figure className="meeting-list-table">
                    <table>
                        <thead>
                            <tr className="table-header">
                                <th>CALL ID</th>
                                <th>OWNER</th>
                                <th>NAME</th>
                                <th>DATE</th>
                                <th>START</th>
                            </tr>
                        </thead>
                        
                        {meetings}

                    </table>
                </figure>
            </div>
        </>
    )

}

export default MeetingsList;