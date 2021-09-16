const db = require('../config/connections');
const { User, Company, Job, Contact, Notes } = require('../models');
const userSeeds = require('./user.json');
const companySeeds = require('./company.json');
const jobSeeds = require('./job.json');
const contactSeeds = require('./contact.json');
const notesSeeds = require('./notes.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Company.deleteMany({});
    await Job.deleteMany({});
    await Contact.deleteMany({});
    await Notes.deleteMany({});

    await User.create(userSeeds);
    await Notes.create(notesSeeds);
    const company = await Company.create(companySeeds);
    const job = await Job.create(jobSeeds);
    const contact = await Contact.create(contactSeeds);

  for (newJob of job) {
      //activety 6 of Mern Folder, seeds.js
    // randomly add each job to a company
    const tempCompany = company[Math.floor(Math.random() * company.length)];
    tempCompany.jobs.push(newJob._id);
    await tempCompany.save();
    // randomly add each contact to a job
    const tempContact = contact[Math.floor(Math.random() * contact.length)];
    newJob.contact = tempContact._id;
  console.log("====contact info====", newJob.contact)  
  console.log("===tempory contact===", tempContact)  
  await newJob.save();
    //taking the contact and pushing it to the job, two way street with referencing
    tempContact.jobs.push(newJob._id);
    console.log("===tempCOntactJObs===", tempContact.jobs)
    await tempContact.save();
  }

    
    console.log('\n!!!!all done!!!!!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
