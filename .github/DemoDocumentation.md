<a href="/README.md">
  <img 
    alt="Go Back" 
    src="goback.png"
    width=50" 
    height="50"
  />
</a>

## Demo Documentation

The demo is a small React app with it's own Webpack config that we build and serve via GitHub Pages.

In `/demo/src/`, directories starting with an underscore are pages, the rest are the demo components.

Aftering importing your demo component in `/demo/DEMOS.js`, add a new object in `/demo/DEMOS.js` to display your demo in the GUI. 

**Demo objects must have the following shape:**

```javascript
{
  value: 'Your Demo Name',               // The name that will appear in the dropdown
  component: YourImportedDemoComponent,  // Import your component and use it here
  id: 'make_this_as_unique_as_possible', // Used for `key` prop in loops
}
```

### For your changes to show up in the GUI

You will need to run `npm run build:demo` before submitting a PR

## To-Do Documentation

In order to add or complete a to-do item, edit `/demo/src/_ToDo/toDos.js`. **Each to-do item must have the following shape:**

```javascript
{
  title: "Title here",
  description: "More details here",   // Details on your to-do item
  completed: false,                   // true or false
  id: "make_me+as_unique+as_possible" // Used as the key prop in loops
},      
```
