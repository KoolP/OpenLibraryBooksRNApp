import {fetchWithTimeout} from '../src/utils/fetchWithTimeout';
import {server} from '../src/mocks/server';
import {http, HttpResponse} from 'msw';
import {OPEN_LIBRARY_BASE_URL} from '../src/api-services/constants';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('fetchWithTimeout', () => {
  it('successfully fetches data within the timeout', async () => {
    server.use(
      http.get(`${OPEN_LIBRARY_BASE_URL}/search.json`, () => {
        return HttpResponse.json({docs: [{title: 'Mock Book'}]});
      }),
    );

    const response = await fetchWithTimeout<{docs: Array<{title: string}>}>(
      `${OPEN_LIBRARY_BASE_URL}/search.json`,
      5000,
    );

    expect(response.docs[0].title).toBe('Mock Book');
  });

  it('throws an error on timeout', async () => {
    server.use(
      http.get(`${OPEN_LIBRARY_BASE_URL}/search.json`, async () => {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay to trigger timeout
        return HttpResponse.json({docs: [{title: 'Mock Book'}]});
      }),
    );

    await expect(
      fetchWithTimeout(`${OPEN_LIBRARY_BASE_URL}/search.json`, 10), // Set a very short timeout to trigger the error
    ).rejects.toMatchObject({
      message: 'Request timed out, try again',
      status: 408,
    });
  });
});
