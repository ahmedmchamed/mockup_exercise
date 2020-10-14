import React, { useState, useEffect } from 'react';

export default function ScheduleMeeting() {

    const formState = {
        title: "",
        description: "",
        duration: 0
    }

    const [formInput, setFormInput] = useState(formState);

    const {title, description, duration} = formInput;

    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [duration, setDuration] = useState(0);

    // const handleTitle = (event) => {
    //     setTitle(event.target.value)
    //     console.log(title)
    // }

    // const handleDescription = (event) => {

    // }

    // const handleDuration = (event) => {

    // }

    const handleFormInput = (event) => {
        setFormInput({
            ...formState,
            [event.target.name]: event.target.value
        })
        console.log(title)
        console.log(description)
        console.log(duration)
    }

    return (
        <>
        <form className="schedule-form">
            <label>
                TITLE
                <input 
                    name="title"
                    type="text"  
                    value={title} 
                    onChange={handleFormInput} 
                    placeholder="Weekly Meeting"
                />
            </label>
            <label>
                DESCRIPTION
                <input
                    name="description"
                    type="text"
                    value={description}
                    onChange={handleFormInput}
                    placeholder="Weekly Stand Up and Project"
                />
            </label>
            <label>
                DURATION
                <select name="duration" value={duration} onChange={handleFormInput}>
                    <option value="1">1h</option>
                    <option value="2">2h</option>
                    <option value="3">3h</option>
                </select>
            </label>
        </form>
        </>
    )

}