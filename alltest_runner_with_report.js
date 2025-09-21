const { exec } = require('child_process');

exec('npx cypress run --headed --browser chrome', (error, stdout, stderr) => {
  console.log(stdout);
  console.error(stderr);
  // Always run the report script, even if Cypress fails
  require('./custom-report-config.js');
  // Optionally, exit with the same code as Cypress
  process.exit(error ? error.code : 0);
});