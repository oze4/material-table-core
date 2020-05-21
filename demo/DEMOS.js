/**
 * To add a new demo component, add a new object to the `demos` array below.
 * Make sure the shape matches: `{ value: string, component: DemoComponent, id: unique_string }`
 */
import OriginalDemo from './src/Components/Demos/OriginalDemo/demo';
import BasicDemo from './src/Components/Demos/BasicDemo';
import OverrideOnRowAddDemo from './src/Components/Demos/OverrideOnRowAddDemo';
import OnRowAddDefaultRowDataDemo from './src/Components/Demos/OnRowAddDefaultRowDataDemo';
import TreeTableSearch from './src/Components/Demos/TreeTableSearch';

export default [
  {
    value: 'Original material-table Demo',
    component: OriginalDemo,
    id: '000',
    publicUrl: 'https://github.com/oze4/material-table-core/blob/master/demo/src/Components/Demos/OriginalDemo/demo.js', // Not required but helpful!
    default: true, // Not a required property!
  },
  {
    value: 'Basic Demo',
    component: BasicDemo,
    id: '001',
    publicUrl: 'https://github.com/oze4/material-table-core/blob/master/demo/src/Components/Demos/BasicDemo/index.js', // Not required but helpful!
  },
  {
    value: 'Override onRowAdd',
    component: OverrideOnRowAddDemo,
    id: '002',
    publicUrl: 'https://github.com/oze4/material-table-core/blob/master/demo/src/Components/Demos/OverrideOnRowAddDemo/index.js', // Not required but helpful!
  },
  {
    value: 'Default Row Data When Adding New Row',
    component: OnRowAddDefaultRowDataDemo,
    id: '003',
    publicUrl: 'https://github.com/oze4/material-table-core/blob/master/demo/src/Components/Demos/OnRowAddDefaultRowDataDemo/index.js', // Not required but helpful!
  },
  {
    value: 'Tree Table Search Data',
    component: TreeTableSearch,
    id: '004',
    publicUrl: 'https://github.com/oze4/material-table-core/blob/master/demo/src/Components/Demos/TreeTableSearch/index.js', // Not required but helpful!
  }
];
