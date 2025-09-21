const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

const source_json = 'cypress/test_reports/test_result.json';
const source_html = 'cypress/test_reports/test_result.html';

const timestamp = dayjs().format('YYYY-MM-DD-HH-mm-ss');
const destJson = `cypress/test_reports/latest_report/test_result_${timestamp}.json`;
const destHtml = `cypress/test_reports/latest_report/test_result_${timestamp}.html`;

function waitForFile(file, timeout = 10000) {
  const start = Date.now();
  while (!fs.existsSync(file)) {
    if (Date.now() - start > timeout) return false;
    require('deasync').sleep(500);
  }
  return true;
}

if (waitForFile(source_json)) {
  fs.copyFileSync(source_json, destJson);
}
if (waitForFile(source_html)) {
  fs.copyFileSync(source_html, destHtml);
}