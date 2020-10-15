import React from 'react';

const UsersList = (props) => {

    const meetingDateDetails = new Date(props.meetStartTime);

    const dayOfMeeting = meetingDateDetails.toLocaleString('default', { day: 'numeric'})
    const monthOfMeeting = meetingDateDetails.toLocaleString('default', { month: 'long' });
    const yearOfMeeting = meetingDateDetails.toLocaleString('default', { year: 'numeric' })
    const timeOfMeeting = meetingDateDetails.toLocaleString('default', { hour12: true, hour: '2-digit', minute: '2-digit' });

    const meetingName = props.meetingName.charAt(0).toUpperCase() + props.meetingName.slice(1);
    const meetingOwner = props.usersList.find(user => user.id === props.owner);
    let meetingOwnerName;
    if (meetingOwner) {
        meetingOwnerName = `${meetingOwner.first_name} ${meetingOwner.last_name}`;
    }

    return (
        <>
            <tbody>
                <tr className="table-body">
                    <td>{props.callId}</td>
                    <td>{meetingOwnerName}</td>
                    <td>{meetingName}</td>
                    <td>{dayOfMeeting} {monthOfMeeting} {yearOfMeeting}</td>
                    <td>{timeOfMeeting}</td>
                </tr>
            </tbody>
        </>
    )

}

export default UsersList;