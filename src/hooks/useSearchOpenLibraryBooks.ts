import {useState} from 'react';
import {searchBooks, Book} from '../services/openLibraryApi';

interface ApiError extends Error {
  status?: number;
}

interface UseSearchOpenLibraryBooksReturn {
  search: (query: string) => Promise<void>;
  loading: boolean;
  error: {message: string; status?: number} | null;
  data: Book[];
}

const useSearchOpenLibraryBooks = (): UseSearchOpenLibraryBooksReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{message: string; status?: number} | null>(
    null,
  );
  const [data, setData] = useState<Book[]>([]);

  const search = async (query: string) => {
    try {
      setLoading(true);
      setError(null);

      const results = await searchBooks(query);

      if (results.length === 0) {
        setError({message: 'No books found. Please try another query.'});
      } else {
        setData(results);
      }
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
  };

  return {search, loading, error, data};
};

export default useSearchOpenLibraryBooks;
