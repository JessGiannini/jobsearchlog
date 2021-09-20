import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_JOB } from '../utils/mutations';

function JobForm(props) {
  const [job, setJob] = useState({ name: '', description: '' });
  const [addJob, { error }] = useMutation(ADD_JOB);

  const handleFormSubmit = async (event) => {
    console.log('HandleSubmit function');
    event.preventDefault();
    console.log(job);
    try {
      const { data } = await addJob({
        variables: {
          ...job,
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
    setJob({ ...job, [name]: value });

    console.log(job);
  };
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label for="JobTitle">
                Job Title:
             <input id="JobTitle" type="text" name="jobtitle" onChange={handleChange}/>
               </label><br></br>
                               
                <label for="Description">
                Description:
             <input id="Description" type="text" name="description" onChange={handleChange}/>
               </label><br></br>

                <label for="Experience">
                Experience:
             <input id="Experience" type="text" name="experience" onChange={handleChange}/>
               </label><br></br>

                <label for="City">
                City:
             <input id="City" type="text" name="city" onChange={handleChange}/>
               </label><br></br>

                <label for="State">
                State:
             <input id="State" type="text" name="state" onChange={handleChange}/>
               </label><br></br>
{/* Remote is a boolean, needs checkbox */}
                <label for="Remote">
                Remote:
             <input id="Remote" type="text" name="remote" onChange={handleChange}/>
               </label><br></br>
{/* JobFound will be a hyperlink, needs to be clickable */}
                <label for="JobFound">
                JobFound:
             <input id="JobFound" type="text" name="jobfound" onChange={handleChange}/>
               </label><br></br>

                <label for="Salary">
                Salary:
             <input id="Salayr" type="text" name="salary" onChange={handleChange}/>
               </label><br></br>

                <label for="Submited">
                Submited:
             <input id="Submited" type="text" name="submited" onChange={handleChange}/>
               </label><br></br>

                <input type="submit" value="Submit" />
            </form>
            
        </div>
    )
}

export default JobForm;
