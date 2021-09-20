import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMPANY } from '../utils/mutations';

function CompanyForm(props) {
  const [formState, setFormState] = useState({ name: '', description: '' });
  const [addCompany] = useMutation(ADD_COMPANY);
}
