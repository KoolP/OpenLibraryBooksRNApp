# React Native Book Search App

![React native app](https://imgur.com/gSZO7mv)

## Book Search App Assignment:

Create a React Native Book Search app that uses the OpenLibrary API to search for books and retrieve detailed information about a selected book.

## DISCUSSION:

1. Network calls and slow internet: The assignment specifies that the "application should give endusers feedback concerning errors or very slow internet connection". If I would interpret the mening of slow internet connection literally I would implement a solution where the application can recognise the users internet connection and give feedback on it. This kind of solution could be solved for example with react Native NetInfo package where internet connection can be monitored or identified if there is any internet connection. Now I applied instead a 10 second limiter to the fetch so it catches a sluggish fetch towards the api.

2. Opted not to use Axios to keed the deps at bare minimum. Here I found an interesting fact that the fetch API does not include timeout tracking out of the box. Created an abstraction for it as the assignment noted that too slow connections or fetches need to be handled.

3. TS config and Linting: would prefer to go the community defaults on these. Added some preferences towards wwarning towards any and a setup for relying the Linter to focus on its own and Prettier doing its own thing.

## TODOS

- Applying testing around specific use cases such as hooks or functions handling fetching.
- Applying offline persistance, more context needed.
- Handle errors and logging more gracefully.

### **DEPRECATION WARNING**:

The **Create React Native App** command has been deprecated. The React Native community and the React team now default to using **Expo** as the preferred starting point for new React Native projects. However, this app was created without **Expo**, as per the assignment instructions.

For future projects, consider using **create-expo-app** or provide the following instructions, found in the React Native documentation, for working without a framework:

- [Getting Started Without a Framework](https://reactnative.dev/docs/getting-started-without-a-framework)

### Additional References regarding deprication:

- [Expo and Create React Native App](https://github.com/expo/create-react-native-app)
- [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

---

Running app requires xCode or Android Studio
Run: npx react-native run-ios
