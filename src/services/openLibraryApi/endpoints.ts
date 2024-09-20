import {fetchWithTimeout} from './fetchWithTimeout';

export interface Book {
  title: string;
  author_name: string[];
  first_publish_year: number;
  key: string;
}

interface SearchResponse {
  docs: Book[];
}

// SearchBooks is constrained to get key,title,author_name,first_publish_year for displaying only them in details page and beeing able to type it strongly
export const searchBooks = async (query: string): Promise<Book[]> => {
  const response = await fetchWithTimeout<SearchResponse>(
    `/search.json?q=${encodeURIComponent(
      query,
    )}&fields=key,title,author_name,first_publish_year`,
  );
  return response.docs;
};

export interface BookDetails {
  title: string;
  description?: string;
  first_publish_date?: string;
  covers?: number[];
  authors?: {key: string}[];
}

export const fetchBookDetails = async (
  bookKey: string,
): Promise<BookDetails> => {
  return await fetchWithTimeout<BookDetails>(bookKey + '.json');
};
