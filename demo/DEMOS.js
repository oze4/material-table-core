/**
 * To add a new demo component, add a new object to the `demos` array below.
 * Make sure the shape matches: `{ value: string, component: DemoComponent, id: unique_string }`
 */
import OriginalDemo from './src/Demos/OriginalDemo/demo';
import BasicDemo from './src/Demos/BasicDemo';
import OverrideOnRowAddDemo from './src/Demos/OverrideOnRowAddDemo';

export default [
  {
    value: 'Original material-table Demo',
    component: OriginalDemo,
    id: '000',
    default: true, // Not a required property!
  },
  {
    value: 'Basic Demo',
    component: BasicDemo,
    id: '001',
  },
  {
    value: 'Override onRowAdd',
    component: OverrideOnRowAddDemo,
    id: '002',
  },
];
