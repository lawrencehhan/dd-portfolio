'use client'
import { useState } from 'react';
import FormField from './FormField';
import { motion } from 'framer-motion';
interface FormData {
    name: string,
    email: string,
    message: string,
    submitted: boolean
}


export default function Form() {
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormData>({
        name: "", 
        email: "",
        message: "", 
        submitted: false
    })
    function handleFormChange(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className='contact-form'>
            <div className='contact-form-card'>
                <div className='form-col form-col-title text-heading-l'>
                    contact
                </div>
                <div className='form-col'>
                    <FormField formData={formData} handleFormChange={handleFormChange} />
                </div>
                <div className='form-col'>
                    <motion.button 
                        className='btn-submit'
                        whileHover={{ 
                            scale: 1.04, 
                            transition: {
                                duration: .12,
                                ease: 'easeOut'
                            } 
                        }}
                        whileTap={{ scale: 0.92, opacity: .3 }}
                        
                    >
                        Submit Message
                    </motion.button>
                </div>
            </div>
        </div>
    )
}