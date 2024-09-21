import {useState, useCallback} from 'react';
import {fetchBookDetails, BookDetails} from '../api-services/endpoints';

interface UseFetchBookDetailsReturn {
  fetchDetails: (bookId: string) => Promise<void>;
  isLoading: boolean;
  error: {message: string} | null;
  data: BookDetails | null;
}

const useFetchBookDetails = (): UseFetchBookDetailsReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{message: string} | null>(null);
  const [data, setData] = useState<BookDetails | null>(null);

  const fetchDetails = useCallback(async (bookId: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await fetchBookDetails(bookId);
      setData(result);
    } catch (e: unknown) {
      if (typeof e === 'object' && e !== null && 'message' in e) {
        setError({message: (e as {message: string}).message});
      } else {
        setError({message: 'An unexpected error occurred'});
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {fetchDetails, isLoading, error, data};
};

export default useFetchBookDetails;
