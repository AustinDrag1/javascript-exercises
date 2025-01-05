const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book','Book2']);
  });
});


describe('getTheTitles 2', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      },
      {
        title: 'Book3',
        author: 'Name3'
      }
    ]

  test('gets titles 2', () => {
    expect(getTheTitles(books)).toEqual(['Book','Book2','Book3']);
  });
});
