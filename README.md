# React Native Book Search App

![React native app](https://firebasestorage.googleapis.com/v0/b/vow-asa.appspot.com/o/BookAppv2.webp?alt=media&token=9f553346-6b09-4ef7-a7fc-17b63649d23c)

## Book Search App Assignment:

Create a React Native Book Search app that uses the OpenLibrary API to search for book titles or authors and retrieve detailed information about a selected book.

Current features:

- Fetches for books and authors and lists their books
- Shows a books detail page including more info of a specific book.
- Test setup with Jest, React Testing Library and MSW.
- Custom utility funciton specified for handling fetch timeouts aka sluggish server responses or slow internet in React Native. This makes us less reliable on extra dependencies such as Axios.

## DISCUSSION:

1. Added a testing setup including Jest, Raact Native Testing Library and MSW for simultating network calls. Currenlty only testing the app base rendering with the react-navigation/native navigation and a second test on a utility function that indentifies fetch timeouts. MSW can mock the DEV mode if opted in, so the simulator dev app also fetches the mock endpoints if so wished. This makes it easier to simulate beeing a user in test environment and making "real" network calls. More info about msw: https://mswjs.io/docs/integrations/react-native/

2. Network calls and slow internet: The assignment requires the application to provide feedback to users regarding errors or slow internet connections. If we would interepret the assignment word to word we would inform the user about their slow internet. Thogh instead of using NetInfo to monitor the users internet connection, I added a default 10-second timeout for fetch requests to handle sluggish responses. As this is not a default feature it could maybe be argued how relewant this is.

3. Axios vs. js fetch: To minimize dependencies and to poc the probable way of fetch beeing the default tool for network calls in React Native as in Node since v18 and in web applications and browsers, I chose to use the built-in fetch API even Axios may have some built in features the assignment required such as fetch timeouts that inform user of slow responses. I created a custom abstraction to handle timeouts, as fetch on React Native doesn't include timeout tracking out of the box. React native does not have the AbortSignal.timeout as browsers have natively, see docs: https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal#aborting_a_fetch_operation_with_a_timeout

4. TS config and Linting: I thought linting rules are quite essential in this kind of assignment where clean code is demanded. I used eslint and react-native community defaults for TypeScript configuration and linting with just a small toch of extra rules. I also wanted to separate configuration for linting and Prettier formatting from each other. Here is a good talk from Josh Goldberg on Setting Up ESLint and TypeScript for React at React Miami 2023: https://www.youtube.com/watch?v=sSJBeWPIipQ

### Further possible todos

As time run out there was couple things I could look at further:

- Add more testing for specific use cases such as further mocking of calls to the book library and what is displayed on the page and then end to end tests with for example Cypress.
- Add offline persistence, here it would be interesting to know or come up with a specific use case, would it for example save a list of already searched books and display them separately. Maybe it could fetch a whole book, unsure if that was possible via the api.This subject also is a bit of an interesting feature as cacheing is regarded as on of the harder parts in software development and may bring risks instead of for example relying on a single source of truth: the database.

### **NOTEABLE DEPRECATION WARNING**:

The Create React Native App command has been deprecated. The React Native community and the React team now recommend using Expo as the preferred starting point for new React Native projects. However, this app was created without Expo, as per the assignment instructions.

For future projects, consider using create-expo-app as a starting point or continue following the instructions in the React Native documentation for working without a framework that is a bit hidden in their docs:

- [Getting Started Without a Framework](https://reactnative.dev/docs/getting-started-without-a-framework)

More about the deprication and move towards Expo:

- [Expo and Create React Native App](https://github.com/expo/create-react-native-app)
- [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

---

Running app requires xCode or Android Studio.

Run ios: npx react-native run-ios
