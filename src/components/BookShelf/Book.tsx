import { BookType } from '../../store/book/bookSlice';
import { BookShelfChanger } from './BookShelfChanger';

interface BookProps {
  bookTitle?: string;
  bookAuthor?: string | string[];
  URL?: string;
  updateBookShelf: (book: BookType, value: string) => void;
  book: BookType;
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
  const bookChanger = async (shelf: string) => {
    await updateBookShelf(book, shelf);
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
