const db = require('../config/connections');
const { User, Company, Job, Contact } = require('../models');
const userSeeds = require('./user.json');
const companySeeds = require('./company.json');
const jobSeeds = require('./job.json');
const contactSeeds = require('./contact.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Company.deleteMany({});
    await Job.deleteMany({});
    await Contact.deleteMany({});

    await User.create(userSeeds);
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
    await newJob.save();
    //taking the contact and pushing it to the job, two way street with referencing
    tempContact.jobs = newJob._id;
    await tempContact.save();
  }
    
    console.log('\n!!!!all done!!!!!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
