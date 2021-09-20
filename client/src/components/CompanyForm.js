import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMPANY } from '../utils/mutations';

function CompanyForm(props) {
  const [company, setCompany] = useState({ name: '', description: '' });
  const [addCompany, { error }] = useMutation(ADD_COMPANY);

  const handleFormSubmit = async (event) => {
    console.log('HandleSubmit function');
    event.preventDefault();
    console.log(company);
    try {
      const { data } = await addCompany({
        variables: {
          ...company,
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
    setCompany({ ...company, [name]: value });

    console.log(company);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Name:</label>
      <input type="text" name="name" onChange={handleChange} />
      <label>Description:</label>
      <input type="text" name="description" onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CompanyForm;
