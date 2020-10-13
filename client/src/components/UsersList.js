import React from 'react';

const UsersList = (props) => {

    const meetingDateDetails = new Date(props.meetStartTime);

    const dayOfMeeting = meetingDateDetails.toLocaleString('default', { weekday: 'long'})
    const monthOfMeeting = meetingDateDetails.toLocaleString('default', { month: 'long' });
    const yearOfMeeting = meetingDateDetails.toLocaleString('default', { year: 'numeric' })
    const timeOfMeeting = meetingDateDetails.toLocaleString('default', { hour24: true }).split(',')[1]

    const meetingName = props.meetingName.charAt(0).toUpperCase() + props.meetingName.slice(1);
    const meetingOwner = props.usersList.find((user) => user.id === props.owner);

    return (
        <>
            <div className="meeting-list-container">
                <ul>
                    <li>
                        {props.callId} {meetingOwner.first_name} {meetingOwner.last_name} {meetingName} {dayOfMeeting} {monthOfMeeting} {yearOfMeeting} {timeOfMeeting}
                    </li>
                </ul>
            </div>
        </>
    )

}

export default UsersList;