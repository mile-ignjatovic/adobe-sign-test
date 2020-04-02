Dev guide:

### `npm install`

Runs the instalation of npm packages
IMPORTANT!!! to enable css modules with less in this setup, when npm packages are installed navigate to node_modules/less-watch-compiler/dist/lib/lessWatchCompilerUtils.js
    and on the line: 138 change
        ext: (lessWatchCompilerUtilsModule.config.minified ? '.min' : '') + '.css'
    to
        ext: (lessWatchCompilerUtilsModule.config.minified ? '.min' : '') + '.module.css'
    
### `npm run dev-start`
    Starts npm run less-watch and npm run start and json-server on port 3001 concurently.
    !If you run this script you should not run npm start and, run less-watch and json-server!

### `npm run less-watch`

Runs less-watch-compiler to automaticaly compile less files to xxx.module.css
(if files are not compiling correctly, restart npm start and npm run less-watch scripts)

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000)

### `npm run json-server`

Runs json-server --watch db.json --port 3001
Serves a mock json database with data located in ./db.json file

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
<!-- 
### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
