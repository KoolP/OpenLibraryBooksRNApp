/*
The AbortSignal.timeout() is part of a modern web API available in standard web browsers but not yet supported in React Native.Therefore we rely on this fetchWithTimeout abstraction to pass a timeout to fetching if needed.
*/

export const fetchWithTimeout = async <T>(
  endpoint: string,
  timeout: number = 10000,
): Promise<T> => {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(endpoint, {
      signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw {
        message: `Error ${response.status}: ${response.statusText}`,
        status: response.status,
      };
    }

    const data: T = await response.json();
    return data;
  } catch (error: unknown) {
    if (signal.aborted) {
      throw {message: 'Request timed out, try again', status: 408};
    }
    throw {
      message:
        error instanceof Error ? error.message : 'An unexpected error occurred',
      status: 500,
    };
  }
};
