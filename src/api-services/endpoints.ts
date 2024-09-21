import {fetchWithTimeout} from '../utils/fetchWithTimeout';
import {Book, BookDetails, SearchResponse} from './types';
import {OPEN_LIBRARY_BASE_URL} from './constants';

export const searchBooks = async (query: string): Promise<Book[]> => {
  const url = `${OPEN_LIBRARY_BASE_URL}/search.json?q=${encodeURIComponent(
    query,
  )}&fields=key,title,author_name,first_publish_year`;
  const response = await fetchWithTimeout<SearchResponse>(url, 10000);
  return response.docs;
};

export const fetchBookDetails = async (
  bookKey: string,
): Promise<BookDetails> => {
  const url = `${OPEN_LIBRARY_BASE_URL}${bookKey}.json`;
  return await fetchWithTimeout<BookDetails>(url, 10000);
};
