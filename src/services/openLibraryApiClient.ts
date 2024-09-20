import {ApiError} from '../types/global';

const OPEN_LIBRARY_BASE_URL = 'https://openlibrary.org';
export const OPEN_LIBRARY_COVERS_URL = 'https://covers.openlibrary.org/b/id/';

export const openLibraryApiRequest = async <T>(
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
        return reject({
          message: `Error ${response.status}: ${response.statusText}`,
          status: response.status,
        } as ApiError);
      }

      const data: T = await response.json();
      clearTimeout(timer);
      resolve(data);
    } catch (error) {
      clearTimeout(timer);

      if (error instanceof Error) {
        reject({
          message: error.message || 'An unknown error occurred',
          status: 500,
        } as ApiError);
      } else {
        reject({
          message: 'An unknown error occurred',
          status: 500,
        } as ApiError);
      }
    }
  });
};
