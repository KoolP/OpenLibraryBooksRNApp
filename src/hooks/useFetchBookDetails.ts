import {useCallback, useState} from 'react';
import {fetchBookDetails, BookDetails} from '../services/openLibraryApi';

interface ApiError extends Error {
  status?: number;
}

interface UseFetchBookDetailsReturn {
  fetchDetails: (bookId: string) => Promise<void>;
  loading: boolean;
  error: {message: string; status?: number} | null;
  data: BookDetails | null;
}

const useFetchBookDetails = (): UseFetchBookDetailsReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{message: string; status?: number} | null>(
    null,
  );
  const [data, setData] = useState<BookDetails | null>(null);

  const fetchDetails = useCallback(async (bookId: string) => {
    try {
      setLoading(true);
      setError(null);

      console.log('Fetching details for book ID: ', bookId); // Log bookId before the API call

      const result = await fetchBookDetails(bookId);

      setData(result);
    } catch (e) {
      const apiError = e as ApiError;
      setError({
        message:
          apiError.message || 'An unknown error occurred. Please try again.',
        status: apiError.status,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return {fetchDetails, loading, error, data};
};

export default useFetchBookDetails;
