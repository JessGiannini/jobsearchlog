import {React} from 'react';

function FormJob() {
    return (
        <div>
            <form>
                <label for="JobTitle">
                Job Title:
             <input id="JobTitle" type="text" name="name" />
               </label><br></br>
                               
                <label for="Description">
                Description:
             <input id="Description" type="text" name="name" />
               </label><br></br>

                <label for="Experience">
                Experience:
             <input id="Experience" type="text" name="name" />
               </label><br></br>

                <label for="City">
                City:
             <input id="City" type="text" name="name" />
               </label><br></br>

                <label for="State">
                State:
             <input id="State" type="text" name="name" />
               </label><br></br>
{/* Remote is a boolean, needs checkbox */}
                <label for="Remote">
                Remote:
             <input id="Remote" type="text" name="name" />
               </label><br></br>
{/* JobFound will be a hyperlink, needs to be clickable */}
                <label for="JobFound">
                JobFound:
             <input id="JobFound" type="text" name="name" />
               </label><br></br>

                <label for="Salary">
                Salary:
             <input id="Salayr" type="text" name="name" />
               </label><br></br>

                <label for="Submited">
                Submited:
             <input id="Submited" type="text" name="name" />
               </label><br></br>

                <input type="submit" value="Submit" />
            </form>
            
        </div>
    )
}

export default FormJob;
