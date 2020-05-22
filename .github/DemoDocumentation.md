<a href="https://github.com/oze4/material-table-core/">
  <img 
    alt="Go Back" 
    src="goback.png"
    width=50" 
    height="50"
  />
</a>

<br />
<br />

The demo is a small React app with it's own Webpack config that we build and serve via GitHub Pages.

# Demo Documentation

 - Place all demo components in [/demo/src/Components/Demos](https://github.com/oze4/material-table-core/tree/master/demo/src/Components/Demos)
 - Open [/demo/DEMOS.js](https://github.com/oze4/material-table-core/blob/master/demo/DEMOS.js) and import your component
   - Create a new object with the shape specified below

**Demo objects must have the following shape:**

```javascript
{
  // The name that will appear in the dropdown
  value: 'Your Demo Name',  
  
  // Import your component and use it here
  component: YourImportedDemoComponent, 
  
  // Used in URL when linking to certain demo as well as the `key` prop in loops
  // If the id below were valid, the link to this demo would be
  //  - https://oze4.github.io/material-table-core/#/demo/make_this_as_unique_as_possible
  id: 'make_this_as_unique_as_possible',
  
  // *Not required, but encouraged* Used as the 'View Source' button within the demo
  publicUrl: 'https://github.com/oze4/material-table-core/blob/master/demo/src/Components/Demos/OnRowAddDefaultRowDataDemo/index.js'
}
```

# To-Do Documentation

In order to add or complete a to-do item, edit `/demo/src/_ToDo/toDos.js`. **Each to-do item must have the following shape:**

```javascript
{
  title: "Title here",
  description: "More details here",   // Details on your to-do item
  completed: false,                   // true or false
  id: "make_me+as_unique+as_possible" // Used as the key prop in loops
},      
```

# Issue Tracker Documentation

## To Update Issue Tracker

You'll need [a GitHub Personal Access Token](https://help.github.com/en/enterprise/2.17/user/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) for this. This is because we use the GitHub API (see [here](https://github.com/oze4/material-table-core/blob/master/demo/src/Pages/IssueTracker/update/utils.js#L52-L68) and [here](https://github.com/oze4/material-table-core/blob/master/demo/src/Pages/IssueTracker/update/updateIssueTracker.js#L31-L33)) to find all issues with `/mtc::resolved` as a comment [see here](#mark-issue-as-resolved) for more on marking issues as resolved.

 - Add an env var to `.env` at project root
   - `GITHUB_TOKEN=your_token_here`
 - Run `npm run update:issue:tracker` from the root of the project

## Mark Issue as Resolved

 - On the `material-table` issue that you want to mark as resolved, just comment `/mtc::resolved` and we will pick up on that
 - Keep in mind you'll need to re-run `npm run update:issue:tracker` for the issue tracker to pick up on these changes
 - Then you'll need to run `npm run build:demo` to add those changed to the bundle
 - Finally, submit a PR so changes go live

# For your changes to show up in the GUI

You will need to run `npm run build:demo` before submitting a PR
