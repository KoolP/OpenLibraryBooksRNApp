# React Native Book Search App

![React native app](https://firebasestorage.googleapis.com/v0/b/vow-asa.appspot.com/o/BookAppv2.webp?alt=media&token=9f553346-6b09-4ef7-a7fc-17b63649d23c)

## Book Search App Assignment:

Create a React Native Book Search app that uses the OpenLibrary API to search for books and retrieve detailed information about a selected book.

## DISCUSSION:

1. Added a testingsetup including Jest and react NAtive Testing Library. Currenlty only testing the app rendering with the react-navigation/native setup

2. Network calls and slow internet: The assignment requires the application to provide feedback to users regarding errors or slow internet connections. Instead of using NetInfo to monitor the internet connection, I implemented a 10-second timeout for fetch requests to handle sluggish responses.

3. Axios vs. fetch: To minimize dependencies, I opted to use the built-in fetch API. I created a custom abstraction to handle timeouts, as fetch doesn't include timeout tracking out of the box.

4. TS config and Linting: I toght Linting rules are quite essential in this kind of assignment where clean code is dempnstrated. I used eslint and react-native community defaults for TypeScript configuration and linting, with preferences for warning-based linting and separate configuration for linting and Prettier formatting from each other. Here is a good talk from Josh Goldberg on Setting Up ESLint and TypeScript for React at React Miami 2023: https://www.youtube.com/watch?v=sSJBeWPIipQ

## TODOS

- Implement testing for specific use cases sucha s mocking of async calls to the api or even trying to implement msw: https://mswjs.io/docs/integrations/react-native/
- Add offline persistence, but more context is needed to determine the specific requirements.
- Handle errors and logging more gracefully.

### **DEPRECATION WARNING**:

The Create React Native App command has been deprecated. The React Native community and the React team now recommend using Expo as the preferred starting point for new React Native projects. However, this app was created without Expo, as per the assignment instructions.

For future projects, consider using create-expo-app or following the instructions in the React Native documentation for working without a framework:

- [Getting Started Without a Framework](https://reactnative.dev/docs/getting-started-without-a-framework)

### Additional References regarding deprication:

- [Expo and Create React Native App](https://github.com/expo/create-react-native-app)
- [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

---

Running app requires xCode or Android Studio
Run: npx react-native run-ios
