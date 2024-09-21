import {useState} from 'react';
import {searchBooks} from '../api-services/endpoints';
import {Book} from '../api-services/types';

interface UseSearchOpenLibraryBooksReturn {
  search: (query: string) => Promise<void>;
  isLoading: boolean;
  error: ErrorState | null;
  data: Book[];
}

interface ErrorState {
  message: string;
}

const useSearchOpenLibraryBooks = (): UseSearchOpenLibraryBooksReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorState | null>(null);
  const [data, setData] = useState<Book[]>([]);

  const search = async (query: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const results = await searchBooks(query);

      if (results.length === 0) {
        setError({message: 'No books found. Please try another query.'});
      } else {
        setData(results);
      }
    } catch (e: unknown) {
      if (e && typeof e === 'object' && 'message' in e) {
        setError({message: String((e as {message: string}).message)});
      } else {
        setError({message: 'An unexpected error occurred'});
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {search, isLoading, error, data};
};

export default useSearchOpenLibraryBooks;
