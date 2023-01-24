# fb_wolrd_cup_scoreboard

This is a demo of certain skills represented in a simple interface that display 
an ongoing match, and a summary of matches.

the main elements used in here:
- Create react app for a client side ready application
- Typescript for application typing
- Atomic Design
- Component catalogue (Storybook)
- Unit test with testing library React
- TDD (With red green refactor practice)
- Data Structure and algorithm (Linked list that inserts match in order in O(n) complexity)
- React context for a single copies storage.
- Hooks
- Text editor debug configurations for tests.

## How to run

1. Run `yarn install` to install all dependencies
2. Run `yarn start` to start the server in [local host](http://localhost:3000/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn storybook`

Run the component catalogue server.
The component catalogue can be then visited in [here](http://localhost:6006/)

### `build-storybook`

Build a production ready component catalogue so you can share it with others that will reuse your elements.
### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `test:nowatch`

Run unit test without watching for changes (CI ready)

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
