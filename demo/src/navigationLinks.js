import {
  BugReport as BugReportIcon,
  Home as HomeIcon,
  Assignment as ToDoIcon,
  GridOn as GridOnIcon,
} from '@material-ui/icons';

export default [
  {
    title: 'Home',
    to: '/',
    icon: HomeIcon,
    id: 0,
  },
  {
    title: 'Examples',
    to: '/demo',
    icon: GridOnIcon,
    id: 1,
  },
  {
    title: 'Issue Tracker',
    to: '/issue-tracker',
    icon: BugReportIcon,
    id: 2,
  },
  {
    title: 'To Do',
    to: '/to-do',
    icon: ToDoIcon,
    id: 3,
  },
];