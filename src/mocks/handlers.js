import {http, HttpResponse} from 'msw';

export const handlers = [
  http.get('https://openlibrary.org/search.json', () => {
    return HttpResponse.json({
      docs: [
        {
          key: 'OL12345W',
          title: 'Mocked Book',
          author_name: ['John Doe'],
          first_publish_year: 2000,
        },
      ],
    });
  }),

  http.get('https://openlibrary.org/works/:id.json', () => {
    return HttpResponse.json({
      title: 'Mocked Book Details',
      covers: [12345],
      first_publish_date: '2000',
      description: 'This is a mocked book description.',
    });
  }),
];
