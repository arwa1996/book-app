import { BookShelfChanger } from './BookShelfChanger';

interface BookProps {
  bookTitle?: string;
  bookAuthor?: string;
  URL?: string;
  updateBookShelf: (book: any, value: string) => void;
  book: any;
  shelf: string;
}

export const Book = ({
  bookTitle,
  bookAuthor,
  URL,
  updateBookShelf,
  book,
  shelf,
}: BookProps) => {
  const bookChanger = (shelf: string) => {
    updateBookShelf(book, shelf);
  };
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
        <BookShelfChanger bookChanger={bookChanger} shelf={shelf} />
      </div>
      <div className='book-title'>{bookTitle}</div>
      <div className='book-authors'>{bookAuthor}</div>
    </div>
  );
};
