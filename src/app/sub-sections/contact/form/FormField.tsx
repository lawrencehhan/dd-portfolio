'use client'
import { use, useState } from "react"
interface FormData {
    name: string,
    email: string,
    message: string,
    submitted: boolean  
}
interface FormField {
    formData: FormData,
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void
}

export default function FormField(props:FormField) {
    const { formData, handleFormChange} = props

    return (
        <form className='formfield-wrap'>
            <label className="formfield">
                <span className="formfield-label label-name">
                    *Name
                </span>
                <input 
                    className="formfield-input input-name"
                    type="text"
                    name="name"
                    onChange={handleFormChange}
                    value={formData.name}
                />
            </label>
            <label className="formfield">
                <span className="formfield-label label-email">
                    *Email address
                </span>
                <input 
                    className="formfield-input input-email"
                    type="text"
                    name="email"
                    onChange={handleFormChange}
                    value={formData.email}
                />   
            </label>
            <label className="formfield">
                <span className="formfield-label label-message">
                    *Message
                </span>
                <textarea 
                    className="formfield-input input-message"
                    name="message"
                    onChange={handleFormChange}
                    value={formData.message}
                />
            </label>
        </form>
    )
}