/**
 * ------------------------------------------------------------------------------------------
 * --- NOTES --------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------------------
 *
 * See https://github.com/oze4/material-table-core/blob/master/.github/DemoDocumentation.md#to-update-issue-tracker
 * for more info about this script.
 *
 * 1. I am keeping this here for documentation purposes. The following URL is what our Octokit
 * queries are based upon - https://api.github.com/search/issues?q=repo:mbrn/material-table+is:open+is:issue
 *
 * 2.
 *
 */

const dotenv = require('dotenv');
dotenv.config({ path: '../../../../../.env' });

const fs = require('fs');
const path = require('path');

const { Octokit } = require('@octokit/rest');
const { throttling } = require('@octokit/plugin-throttling');
const OctokitWithPlugins = Octokit.plugin(throttling);
const { getToken, getResolvedIssues, makeThrottler } = require('./utils');

const OUTPUT_FILE_PATH = '../resolved_issues.json';

(async () => {
  try {
    const github = new OctokitWithPlugins({
      auth: getToken(),
      throttle: makeThrottler(Octokit),
    });

    const datas = await getResolvedIssues(github, 'mbrn', 'material-table');
    fs.writeFileSync(OUTPUT_FILE_PATH, JSON.stringify(datas, null, 2));

    // Notify of success
    console.log(`\r\n - Found ${datas.length} resolved issue${datas.length > 1 ? 's' : ''}!`);
    console.log(`\r\n - Updated file has been written to "${path.resolve(__dirname, OUTPUT_FILE_PATH)}"`);
    console.log('\r\n - Now run\`npm run build:demo\` to reflect these changes in the live website');
    console.log('\r\n');
  } catch (err) {
    console.trace(err);
  }
})();

