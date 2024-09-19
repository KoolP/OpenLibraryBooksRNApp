import {openLibraryApiRequest} from './openLibraryApiClient';

interface Book {
  title: string;
  author_name: string[];
  first_publish_year: number;
  key: string;
}

interface SearchResponse {
  docs: Book[];
}

export const searchBooks = async (query: string) => {
  const response = await openLibraryApiRequest<SearchResponse>(
    `/search.json?q=${encodeURIComponent(
      query,
    )}&fields=key,title,author_name,first_publish_year`,
  );
  return response.docs;
};
