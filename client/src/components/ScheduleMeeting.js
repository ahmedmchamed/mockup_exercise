import React, { useState, useEffect } from 'react';

export default function ScheduleMeeting() {

    const formState = {
        title: "",
        description: "",
        duration: 0,
        owner: null,
        guests: []
    }

    const [formInput, setFormInput] = useState(formState);
    const {title, description, duration, owner, guests} = formInput;

    const [postResultObject, setPostResultObject] = useState({});

    const handleFormInput = (event) => {
        setFormInput({
            ...formInput,
            [event.target.name]: event.target.value
        })
        console.log(title)
        console.log(description)
        console.log(duration)
    }

    const handleOwnerSearch = (event) => {

    }

    const handleSubmit = () => {
        const postUrl = "https://coding-test.ajenta.io/meetings";
        fetch(postUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formInput)
        })
        .then(res => res.json())
        .then(postObject => setPostResultObject(postObject));
    }

    return (
        <>
            <form className="schedule-form" onSubmit={handleSubmit}>
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
                    <select name="duration" value={duration} defaultValue="default" onChange={handleFormInput}>
                        <option disabled selected="selected" value="default"></option>
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
            <div className="add-guests-field">
                <label>
                    ADD GUESTS
                    <input
                        name="owner"
                        type="text"
                        value={owner}
                        onChange={handleOwnerSearch}
                    />
                </label>
            </div>
        </>
    )

}