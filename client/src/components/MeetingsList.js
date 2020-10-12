import React from 'react';
import UsersList from './UsersList.js';

const MeetingsList = ({meetingsList}) => {

    const meetings = meetingsList.map((meeting) => {
        return <UsersList
                    meetingsList={meetingsList} 
                    callId={meeting.callid}
                    meetingName={meeting.name}
                    meetStartTime={meeting.start_time}
                    meetEndTime={meeting.end_time}
                    owner={meeting.owner}  
                />
    })

    return (
        <h1>Hello from component</h1>
    )

}

export default MeetingsList;