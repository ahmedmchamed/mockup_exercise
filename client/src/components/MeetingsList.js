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
            <div className="scheduled-meetings">
                <h3 className="scheduled-meetings-title">SCHEDULED MEETINGS ({meetings.length})</h3>
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