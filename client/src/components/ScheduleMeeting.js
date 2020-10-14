import React, { useState, useEffect } from 'react';

export default function ScheduleMeeting({usersList, handleNewMeeting}) {

    const guestHtmlSelect = usersList.map((user, index) => {
        return <option key={index} value={user.id}>{`${user.first_name} ${user.last_name}`}</option>
    })

    const initialFormState = {
        meetingTitle: "",
        meetingDescription: "",
        duration: 0
    }

    const [formInput, setFormInput] = useState(initialFormState);
    const {meetingTitle, meetingDescription, duration} = formInput;
    const [guestIds, setGuestIds] = useState([]);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const [guestHtmlList, setGuestHtmlList] = useState([]);
    
    useEffect(() => {
        handleDuration()
    }, [duration])

    const handleFormInput = (event) => {
        setFormInput({
            ...formInput,
            [event.target.name]: event.target.value
        })
    }

    const handleGuests = (event) => {

        setGuestIds([...guestIds, event.target.value])

        const addGuestToList = usersList.map((user, index) => {
            
            if (user.id === parseInt(event.target.value)) {
                return <li key={index}>{`${user.first_name} ${user.last_name}`}</li>
            }

        })

        setGuestHtmlList([...guestHtmlList, addGuestToList])
    }

    const handleDuration = () => {
        const currentTime = new Date();
        setStartTime(currentTime.toISOString());
        console.log(currentTime)

        const endTime = new Date();
        endTime.setHours(currentTime.getHours() + parseInt(duration))
        setEndTime(endTime);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const schedulePostPayload = {
            name: meetingTitle,
            owner: guestIds[Math.floor(Math.random() * guestIds.length)],
            description: meetingDescription,
            start_time: startTime,
            end_time: endTime,
            guests: guestIds
        }

        handleNewMeeting(schedulePostPayload);
    }

    return (
        <>
            <div className="add-new-schedule">
                <form className="schedule-form" onSubmit={handleSubmit}>
                    <label>
                        TITLE
                        <input 
                            name="meetingTitle"
                            type="text"  
                            value={meetingTitle} 
                            onChange={handleFormInput} 
                            placeholder="Weekly Meeting"
                        />
                    </label>
                    <label>
                        DESCRIPTION
                        <input
                            name="meetingDescription"
                            type="text"
                            value={meetingDescription}
                            onChange={handleFormInput}
                            placeholder="Weekly Stand Up and Project"
                        />
                    </label>
                    <label>
                        DURATION
                        <select name="duration" defaultValue="default" onChange={handleFormInput}>
                            <option disabled value="default"> ⏳ </option>
                            <option value="1">1h</option>
                            <option value="2">2h</option>
                            <option value="3">3h</option>
                        </select>
                    </label>
                    <input 
                        id="schedule-submit-button"
                        type="submit"
                        value="Schedule Meeting"
                    />
                </form>
            </div>
            <div className="add-guests-field">
                <label>
                    ADD GUESTS
                    <select defaultValue="default" onChange={handleGuests}>
                        <option disabled value="default">Choose your guests...</option>
                        {guestHtmlSelect}
                    </select>
                </label>
                <ul>
                    {guestHtmlList}
                </ul>
            </div>
        </>
    )

}