# ATG challenge

In short, the user should be able to **select a horse betting type** of interest and the app should show the **most recent results for that bet type**. Information about the bet type’s races and starts should also be shown.

## Installation, Run and Test

Nodejs (tested in v16.14.0) is required in order to run and build the project.

** For changing the server address, modify the `.env` file **

- `yarn install`
- `yarn start`
- `yarn test`

### Tools and technologies

- Typescript: main language used
- React: The javaScript library for building the interface
- Redux Toolkit: State management (The app is simple and the useState api could have been used instead, but is also an MVP and this way is more extensible)
- Styled components: for styling the app
- axios, axios-retry: http client for making API requests

### Testing

It was used @testing-library/react for testing purposes. The principal features were tested using integration tests , where a group of functionalities were tested together, like data fetching, clicks on elements, etc (See: Bet.test.tsx and App.test.tsx)

### Continuous integration

Github actions is used for building and testing using different nodejs versions every time a new commit is made.
