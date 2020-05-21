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

const { getToken, getResolvedIssues } = require('./utils');

// Constants
const TOKEN = getToken();
const OUTPUT_FILE_PATH = '../resolved_issues.json';

const github = new OctokitWithPlugins({
  auth: TOKEN,
  throttle: {
    onRateLimit: (retryAfter, options) => {
      github.log.warn(
        `Request quota exhausted for request ${options.method} ${options.url}`
      );
      if (options.request.retryCount === 0) {
        console.log(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onAbuseLimit: (retryAfter, options) => {
      github.log.warn(
        `Abuse detected for request ${options.method} ${options.url}`
      );
    },
  },
});

getResolvedIssues(github, 'mbrn', 'material-table', 'paginate')
  .then((datas) => {
    const dataStr = JSON.stringify(datas, null, 2);
    fs.writeFileSync(OUTPUT_FILE_PATH, dataStr);

    // Notify of success
    console.log(
      `\r\n\r\n - Found ${
        datas.length
      } resolved issues!\r\n\r\n - Updated file has been written to ${path.resolve(
        __dirname,
        OUTPUT_FILE_PATH
      )}\r\n\r\n - Now run\`npm run build:demo\` to reflect these changes in the live website\r\n\r\n`
    );

  })
  .catch((err) => console.log(err));
