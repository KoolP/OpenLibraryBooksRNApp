# React Native Book Search App

![React native app](https://firebasestorage.googleapis.com/v0/b/vow-asa.appspot.com/o/BookAppv2.webp?alt=media&token=9f553346-6b09-4ef7-a7fc-17b63649d23c)

## Book Search App Assignment:

Create a React Native Book Search app that uses the OpenLibrary API to search for book titles or authors and retrieve detailed information about a selected book.

Current features:

- Fetches for books and authors and lists their books + shows a books detail page including more info of a specific book.
- Test setup with Jest, React Testing Library + MSW.
- Custom utility funciton specified for handling fetch timeouts aka sluggish server responses or slow internet in React Native. This makes us less reliable on extra dependencies such as Axios.

## DISCUSSION:

1. Added a testing setup including Jest, Raact Native Testing Library and MSW for simultating network calls. Currenlty testing the app base rendering with the react-navigation/native navigation and a second test on a utility function that indentifies fetch timeouts. Tests are found in the tests folder. MSW can now also moc the DEV mode if opted in, so the simulator also fetches the mock endpoints. This makes it easier to simulate beeing a user in test environment and making real network calls. More info about msw: https://mswjs.io/docs/integrations/react-native/

2. Network calls and slow internet: The assignment requires the application to provide feedback to users regarding errors or slow internet connections. If we would interepret the assignment word to word we would inform the user about their slow internet. Thogh instead of using NetInfo to monitor the internet connection, I added a 10-second timeout for fetch requests to handle sluggish responses.

3. Axios vs. fetch: To minimize dependencies and to poc the proable way of fetch beeing the default use of network calls in React Native as in Node since v18 and in browsers, I opted to use the built-in fetch API. I created a custom abstraction to handle timeouts, as fetch on React Native doesn't include timeout tracking out of the box. React native does not have the AbortSignal.timeout as browsers have natively, see docs: https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal#aborting_a_fetch_operation_with_a_timeout

4. TS config and Linting: I toght Linting rules are quite essential in this kind of assignment where clean code is demanded. I used eslint and react-native community defaults for TypeScript configuration and linting, with preferences for warning-based linting and separate configuration for linting and Prettier formatting from each other. Here is a good talk from Josh Goldberg on Setting Up ESLint and TypeScript for React at React Miami 2023: https://www.youtube.com/watch?v=sSJBeWPIipQ

### Further possible todos

As time run out there was couple things I could look at further:

- Implement more testing for specific use cases sucha as further mocking of calls to the book library and what is displayed on the page and then end to end tests with for example Cypress.
- Add offline persistence, here it would be interesting to know or come up with a specific use case, would it for example save a list of already searched books and display them separately. Maybe it could fetch a whole book, unsure if that was possible via the api.

### **NOTEABLE DEPRECATION WARNING**:

The Create React Native App command has been deprecated. The React Native community and the React team now recommend using Expo as the preferred starting point for new React Native projects. However, this app was created without Expo, as per the assignment instructions.

For future projects, consider using create-expo-app as a starting point or following the instructions in the React Native documentation for working without a framework that is a bit hidden in their docs:

- [Getting Started Without a Framework](https://reactnative.dev/docs/getting-started-without-a-framework)

More about the deprication and move towards Expo:

- [Expo and Create React Native App](https://github.com/expo/create-react-native-app)
- [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

---

Running app requires xCode or Android Studio.

Run ios: npx react-native run-ios
