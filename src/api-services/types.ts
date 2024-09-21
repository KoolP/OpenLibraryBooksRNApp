export interface Book {
  title: string;
  author_name: string[];
  first_publish_year: number;
  key: string;
}

export interface SearchResponse {
  docs: Book[];
}

export interface BookDetails {
  title: string;
  description?: string;
  first_publish_date?: string;
  covers?: number[];
  authors?: {key: string}[];
}
