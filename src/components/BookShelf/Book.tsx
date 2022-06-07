import { BookShelfChanger } from './BookShelfChanger';

interface BookProps {
  bookTitle?: string;
  bookAuthor?: string;
  URL?: string;
}

export const Book = ({ bookTitle, bookAuthor, URL }: BookProps) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: URL,
          }}
        />
        <BookShelfChanger />
      </div>
      <div className='book-title'>{bookTitle}</div>
      <div className='book-authors'>{bookAuthor}</div>
    </div>
  );
};
