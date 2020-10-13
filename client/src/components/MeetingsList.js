import React from 'react';
import UsersList from './UsersList.js';

const MeetingsList = ({meetingsList, usersList}) => {

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
            <h3>SCHEDULED MEETINGS ({meetings.length})</h3>
            <li></li>
            <h1>{meetings}</h1>
        </>
    )

}

export default MeetingsList;