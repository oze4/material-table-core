const fs = require('fs');
const fetch = require('node-fetch');

const getOpenIssues = async (gitHubUsername, gitHubRepository, token) => {
  try {
    const url = `https://api.github.com/repos/${gitHubUsername}/${gitHubRepository}/issues`;
    const response = await fetch(url,
      { headers: { authorization: `token ${token}` } }
    );
    const firstPage = await response.json();
    const links = response.headers.get('link').split(' ');
    const nextPage = links[0];
    const lastPage = links[2];
    // Gets the last page number from URL - Example URL: <https://api.github.com/repositories/143730858/issues?page=34>;
    const lastPageNumber = Number(lastPage.split('page=')[1].replace('>;', ''));

    const urls = [];
    for (let i = 1; i <= lastPageNumber; i++) {
      const url = nextPage.replace(/page=\d+/gm, `page=${i}`).replace(/^<+|>;+$/g, '');
      urls.push(url);
    }

    let datasArray = [...firstPage];

    return Promise.all(
      urls.map((url) =>
        fetch(url, { headers: { authorization: `token ${token}` } })
          .then((resp) => resp.json())
          .then((data) => { datasArray = [...datasArray, ...data] })
          .catch((error) => console.trace(error))
      )
    ).then(() => datasArray);
  } catch (error) {
    throw new Error(error);
  }
};

getOpenIssues(
  'mbrn',
  'material-table',
  '3ffd473482306a9e82e1f6724e729d737ae06f8c'
)
  .then(datas => {
    const reformattedData = datas.map(data => ({
      id: data.id,
      url: data.url,
      title: data.title,
      user: data.user.login,
      state: data.state,
      assignee: data.assignee,
      assignees: data.assignees,
      comments: data.comments,
      created_at: data.created_at,
      updated_at: data.updated_at,
      materialTableCore: {
        resolved: false,
      }
    }));

    fs.writeFileSync('issues-may-19-2020.json', JSON.stringify(reformattedData, null, 2));
  })
  .catch((err) => console.trace(err));

// const issues = JSON.parse(
//   fs.readFileSync('./issues-may-19-2020.json', { encoding: 'utf-8' })
// );

/*
{
  url: 'https://api.github.com/repos/mbrn/material-table/issues/1927',
  title: 'Is there any thing like OnCellClick event?',
  user: {
    login: 'saiava',
  },
  state: 'open',
  assignee: null,
  assignees: [],
  comments: 0,
  created_at: '2020-05-19T06:09:35Z',
  updated_at: '2020-05-19T06:09:35Z',
}
*/
