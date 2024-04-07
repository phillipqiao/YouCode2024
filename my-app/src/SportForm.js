import React, { useState } from 'react';
import './SportForm.css';

function SportForm() {
    // State to store the form data
    const [formData, setFormData] = useState({
        sportType: '',
        date: '',
        completed: false
    });

    // Handle changing form inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you'd typically handle the form submission (e.g., sending data to a server)
        console.log(formData);
        alert('Form submitted. Check the console for the form data.');
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="formField">
                    <label htmlFor="sportType" className="label">Sport Type:</label>
                    <select name="sportType" id="sportType" value={formData.sportType} onChange={handleChange} className="select">
                        <option value="">Select a sport</option>
                        <option value="running">Running</option>
                        <option value="cycling">Cycling</option>
                        <option value="swimming">Swimming</option>
                        {/* Additional options */}
                    </select>
                </div>
                <div className="formField">
                    <label htmlFor="date" className="label">Date:</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="input" />
                </div>
                <div className="formField">
                    <div className="checkboxContainer">
                        <input type="checkbox" id="completed" name="completed" checked={formData.completed} onChange={handleChange} className="checkbox" />
                        <label htmlFor="completed" className="label">Completed</label>
                    </div>
                </div>
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    );
}

export default SportForm;