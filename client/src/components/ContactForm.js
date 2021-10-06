import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CONTACT } from '../utils/mutations';

function ContactForm(props) {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
  const [addContact, { error }] = useMutation(ADD_CONTACT);

  const handleFormSubmit = async (event) => {
    console.log('HandleSubmit function');
    event.preventDefault();
    console.log(contact);
    try {
      const { data } = await addContact({
        variables: {
          ...contact,
        },
      });
      console.log(`\n DATA: ${data}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    
    setContact({ ...contact, [name]: value });

  };


  return (
    <form onSubmit={handleFormSubmit}>
      <label>Contact Name:</label>
      <input type="text" name="name" onChange={handleChange} />
      <label>Email:</label>
      <input type="text" name="email" onChange={handleChange} />
      <label>Phone:</label>
      <input type="text" name="phone" onChange={handleChange} />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
