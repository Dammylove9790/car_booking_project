import React from 'react'
import FourthForm from '../FouthForm/FourthForm'
import './FouthTab.scss'

function FouthTab() {
  return (
    <div className='forthTab flex'>
        <p className="form-title">Payment details</p>
        <p className="p-text forthTab-text">We need your payment details to pay you</p>
        <FourthForm />
    </div>
  )
}

export default FouthTab