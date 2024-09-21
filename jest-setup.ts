import '@testing-library/react-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';
import {server} from './src/mocks/server';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// msw setup
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
