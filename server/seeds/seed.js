const db = require('../config/connections');
const { User, Company, Job } = require('../models');
const userSeeds = require('./user.json');
const companySeeds = require('./company.json');
const jobSeeds = require('./job.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Company.deleteMany({});
    await Job.deleteMany({});

    await User.create(userSeeds);
    const company = await Company.create(companySeeds);
    const job = await Job.create(jobSeeds);

  for (newJob of job) {
    // randomly add each job to a company
    const tempCompany = company[Math.floor(Math.random() * company.length)];
    tempCompany.jobs.push(newJob._id);
    await tempCompany.save();

  }
    
    console.log('\n!!!!all done!!!!!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
