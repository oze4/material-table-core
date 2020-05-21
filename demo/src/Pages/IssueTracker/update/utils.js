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

/**
 * Gets all issues for X repository that have a comment containing the following text: '/mtc::resolved'.
 * This is how we track issues that have been resolved in this repo but have yet to be resolved.
 *
 * @param {Octokit} octokit   Octokit object
 * @param {string}  owner     GitHub username - the user that owns the repo
 * @param {string}  repo      Repository name
 */
function getResolvedIssues(octokit, owner, repo) {
  const queryBuilder = {
    issues: {
      // Use this query for *open* issues
      open:
        'GET /search/issues?q=repo%3A:owner/:repo+is%3Aopen+is%3Aissue+/mtc%3A%3Aresolved+in%3Acomments',
      // Use this query for *all* issues
      all:
        'GET /search/issues?q=repo%3A:owner/:repo+is%3Aissue+/mtc%3A%3Aresolved+in%3Acomments',
    },
    issuesWithPullRequests: {
      // This query gets all issues and pull requests (despite the URL being /search/issues it returns both PR's and issues)
      all:
        'GET /search/issues?q=repo%3A:owner/:repo+/mtc%3A%3Aresolved+in%3Acomments',
    },
  };

  const query = queryBuilder.issuesWithPullRequests.all;
  const queryOptions = { owner, repo };

  return octokit
    .paginate(query, queryOptions)
    .then((results) => results)
    .catch((error) => {
      throw error;
    });
}

/**
 * Checks for process.env.GITHUB_TOKEN, which requires an env var to be set.
 * `GITHUB_TOKEN=your_token_here` must be in a `.env` file at the root of this project.
 */
function getToken() {
  const ghtoken = process.env.GITHUB_TOKEN;

  if (!ghtoken) {
    const url =
      'https://github.com/oze4/material-table-core/blob/master/.github/DemoDocumentation.md#to-update-issue-tracker';
    throw new Error(
      `Missing process.env.GITHUB_token. See the following URL for more info:\r\n\r\n${url}\r\n\r\n`
    );
  }

  return ghtoken;
}

/**
 * Builds throttler object based upon Octokit docs (taken from there)
 *
 * @param {Octokit} octokit   Assuming var Octokit = require [at]octokit\/rest then you would pass in `Octokit.Octokit`.
 */
function makeThrottler(octokit) {
  const _octokit = new octokit();

  return {
    onRateLimit: (retryAfter, options) => {
      _octokit.log.warn(
        `Request quota exhausted for request ${options.method} ${options.url}`
      );
      if (options.request.retryCount === 0) {
        console.log(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onAbuseLimit: (retryAfter, options) => {
      _octokit.log.warn(
        `Abuse detected for request ${options.method} ${options.url}`
      );
    },
  };
}

module.exports = {
  getToken,
  getResolvedIssues,
  makeThrottler,
};
