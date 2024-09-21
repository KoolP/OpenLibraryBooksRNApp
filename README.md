# React Native Book Search App

![React native app](https://firebasestorage.googleapis.com/v0/b/vow-asa.appspot.com/o/BookAppv2.webp?alt=media&token=9f553346-6b09-4ef7-a7fc-17b63649d23c)

## Book Search App Assignment:

Create a React Native Book Search app that uses the OpenLibrary API to search for book titles or authors and retrieve detailed information about a selected book.

Current features:

- Fetches for books and authors and lists their books + shows a books detailpage including more info of a specific book
- Test setup with Jest, React Testing Library + MSW
- Custom utility funciton specified for handling fetch timeouts aka sluggish server responses or slow internet in React Native. This makes us less reliable on extra dependencies such as Axios.

## DISCUSSION:

1. Added a testing setup including Jest, Raact Native Testing Library and MSW for simultating network calls Currenlty testing the app base rendering with the react-navigation/native navigation and a utility function that indentifies fetchTimeouts. Tests are found in the tests folder. MSW can now also moc the DEV mode so the simulator also fetches the mock endpoints. More info about msw: https://mswjs.io/docs/integrations/react-native/

2. Network calls and slow internet: The assignment requires the application to provide feedback to users regarding errors or slow internet connections. Instead of using NetInfo to monitor the internet connection, I implemented a 10-second timeout for fetch requests to handle sluggish responses.

3. Axios vs. fetch: To minimize dependencies, I opted to use the built-in fetch API. I created a custom abstraction to handle timeouts, as fetch on React Native doesn't include timeout tracking out of the box. React native does not have the AbortSignal.timeout as browsers have natively, see docs: https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal#aborting_a_fetch_operation_with_a_timeout

4. TS config and Linting: I toght Linting rules are quite essential in this kind of assignment where clean code is demanded. I used eslint and react-native community defaults for TypeScript configuration and linting, with preferences for warning-based linting and separate configuration for linting and Prettier formatting from each other. Here is a good talk from Josh Goldberg on Setting Up ESLint and TypeScript for React at React Miami 2023: https://www.youtube.com/watch?v=sSJBeWPIipQ

## TODOS

As time run out there was couple things I could look at further:

- Implement more testing for specific use cases sucha as further mocking of calls to the book library and what is displayed on the page and then end to end tests with for example Cypress.
- Add offline persistence, maybe think of the setup in that case, would it for example save alist of already searched books and display them separately.

### **NOTEABLE DEPRECATION WARNING**:

The Create React Native App command has been deprecated. The React Native community and the React team now recommend using Expo as the preferred starting point for new React Native projects. However, this app was created without Expo, as per the assignment instructions.

For future projects, consider using create-expo-app or following the instructions in the React Native documentation for working without a framework:

- [Getting Started Without a Framework](https://reactnative.dev/docs/getting-started-without-a-framework)

### Additional References regarding deprication:

- [Expo and Create React Native App](https://github.com/expo/create-react-native-app)
- [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

---

Running app requires xCode or Android Studio
Run ios: npx react-native run-ios
