import {ApiError} from '../../types/global';

const OPEN_LIBRARY_BASE_URL = 'https://openlibrary.org';
export const OPEN_LIBRARY_COVERS_URL = 'https://covers.openlibrary.org/b/id/';

// The default fetch API does not include a timout mechanism therefore this abstraction that handles requests that take too long as this assignment requires.
export const fetchWithTimeout = async <T>(
  endpoint: string,
  options: RequestInit = {},
  timeout: number = 10000,
): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    const timer = setTimeout(() => {
      reject({
        message: 'Request timed out, try again',
        status: 408,
      } as ApiError);
    }, timeout);

    try {
      const response = await fetch(
        `${OPEN_LIBRARY_BASE_URL}${endpoint}`,
        options,
      );

      if (!response.ok) {
        clearTimeout(timer);
        reject({
          message: `Error ${response.status}: ${response.statusText}`,
          status: response.status,
        } as ApiError);
        return;
      }

      const data: T = await response.json();
      clearTimeout(timer);
      resolve(data);
    } catch (error: unknown) {
      clearTimeout(timer);

      const apiError: ApiError = {
        message:
          (error instanceof Error
            ? error.message
            : 'An unknown error occurred') || 'An unknown error occurred',
        status: error instanceof Response ? error.status : 500,
      };

      reject(apiError);
    }
  });
};
