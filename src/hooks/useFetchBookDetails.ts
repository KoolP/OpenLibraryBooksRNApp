import {useCallback, useState} from 'react';
import {
  fetchBookDetails,
  BookDetails,
} from '../services/openLibraryApi/endpoints';
import {ApiError} from '../types/global';

interface UseFetchBookDetailsReturn {
  fetchDetails: (bookId: string) => Promise<void>;
  isLoading: boolean;
  error: ApiError | null;
  data: BookDetails | null;
}

const useFetchBookDetails = (): UseFetchBookDetailsReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [data, setData] = useState<BookDetails | null>(null);

  const fetchDetails = useCallback(async (bookId: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await fetchBookDetails(bookId);

      setData(result);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError({message: e.message});
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
