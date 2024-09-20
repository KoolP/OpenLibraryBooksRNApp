import {openLibraryApiRequest} from './openLibraryApiClient';

export interface Book {
  title: string;
  author_name: string[];
  first_publish_year: number;
  key: string;
}

interface SearchResponse {
  docs: Book[];
}

export const searchBooks = async (query: string): Promise<Book[]> => {
  const response = await openLibraryApiRequest<SearchResponse>(
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
  // Ensure the bookKey doesn't have /works/ already
  const cleanBookKey = bookKey.replace('/works/', '');

  return await openLibraryApiRequest<BookDetails>(
    `/works/${cleanBookKey}.json`,
  );
};
