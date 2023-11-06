import React, { useState, useContext } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import "../styles/PhoneNumber.css"
import FirebaseContext from '../pages/Home'


function PhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false)
  const database = useContext(FirebaseContext);
  

  function handleSubmit(event) {
    event.preventDefault();

    const timestamp = Date.now();
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = date.toLocaleString('en-US', options);

    console.log(database)

    push(ref(database, '/phoneNumber'), {[formattedDate]: phoneNumber});

    setPhoneNumber('');

    setSubmitted(true);
  }

  function handleChange(event) {
    setPhoneNumber(formatPhoneNumber(event.target.value));
  }

  function formatPhoneNumber(value) {
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
  
    if (phoneNumberLength < 4) {
      return phoneNumber;
    } else if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Updates
      </label>
      <div className='phoneNumberInput'>
        <input placeholder='(123) 456-7890'type="tel" value={phoneNumber} onChange={handleChange} />
        <button disabled={phoneNumber.replace(/\D/g, '').length === 10 && !submitted ? false : true} type="submit">{submitted ? 'Submitted' : 'Submit'}</button>
      </div>
    </form>
  );
}

export default PhoneNumber