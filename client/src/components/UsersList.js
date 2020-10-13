import React from 'react';

const UsersList = (props) => {
    
    const months = [   
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July",
        "August",
        "September",
        "October",
        "November",
        "December" 
    ]

    const meetingDateDetails = new Date(props.meetStartTime);
    console.log(meetingDateDetails)

    const dayOfMeeting = meetingDateDetails.getMonth();
    const monthOfMeeting = meetingDateDetails.getMon
    const yearOfMeeting = meetingDateDetails.getFullYear();

    let endTime;
    let meetingName;

    return (
        <>
            <div>
                <ul>
                    <li>
                        {dayOfMeeting}
                    </li>
                </ul>
            </div>
        </>
    )

}

export default UsersList;