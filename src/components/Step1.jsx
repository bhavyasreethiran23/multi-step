// Step1.jsx

import { useState } from 'react'

function Step1({ formData, setFormData }) {
  const [emailError, setEmailError] =
    useState('')

  const [phoneError, setPhoneError] =
    useState('')

  /* EMAIL VALIDATION */

  const validateEmail = (value) => {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(value)) {
      setEmailError('Invalid email address')
    } else {
      setEmailError('')
    }
  }

  /* PHONE VALIDATION */

  const validatePhone = (value) => {
    const phoneRegex = /^[0-9]{10}$/

    if (!phoneRegex.test(value)) {
      setPhoneError(
        'Phone number must contain 10 digits'
      )
    } else {
      setPhoneError('')
    }
  }

  return (
    <div>
      <h1 className='title'>Personal info</h1>

      <p className='description'>
        Please provide your name, email
        address, and phone number.
      </p>

      {/* NAME */}

      <div className='form-group'>
        <label>Name</label>

        <input
          type='text'
          placeholder='e.g. Stephen King'
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />
      </div>

      {/* EMAIL */}

      <div className='form-group'>
        <div className='label-row'>
          <label>Email Address</label>

          {emailError && (
            <span className='error-text'>
              {emailError}
            </span>
          )}
        </div>

        <input
          className={
            emailError ? 'error-input' : ''
          }
          type='email'
          placeholder='e.g. stephenking@lorem.com'
          value={formData.email}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            })

            validateEmail(e.target.value)
          }}
        />
      </div>

      {/* PHONE */}

      <div className='form-group'>
        <div className='label-row'>
          <label>Phone Number</label>

          {phoneError && (
            <span className='error-text'>
              {phoneError}
            </span>
          )}
        </div>

        <input
          className={
            phoneError ? 'error-input' : ''
          }
          type='text'
          placeholder='e.g. 9876543210'
          value={formData.phone}
          onChange={(e) => {
            setFormData({
              ...formData,
              phone: e.target.value,
            })

            validatePhone(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

export default Step1