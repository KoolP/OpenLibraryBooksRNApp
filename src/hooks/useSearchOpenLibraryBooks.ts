import {useState} from 'react';
import {searchBooks} from '../services/openLibraryApi';

const useSearchOpenLibraryBooks = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{message: string; status?: number} | null>(
    null,
  );
  const [data, setData] = useState<any[]>([]);

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
    } catch (e: any) {
      setError({
        message: e.message || 'An unknown error occurred. Please try again.',
        status: e.status,
      });
    } finally {
      setLoading(false);
    }
  };

  return {search, loading, error, data};
};

export default useSearchOpenLibraryBooks;
