import {useState} from 'react';
import {searchBooks, Book} from '../services/openLibraryApi';
import {ApiError} from '../types/global';

interface UseSearchOpenLibraryBooksReturn {
  search: (query: string) => Promise<void>;
  isLoading: boolean;
  error: ApiError | null;
  data: Book[];
}

const useSearchOpenLibraryBooks = (): UseSearchOpenLibraryBooksReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
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
      if (e instanceof Error) {
        setError({message: e.message});
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
