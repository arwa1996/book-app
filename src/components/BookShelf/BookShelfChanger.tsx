interface bookShelfChangerProps {
  bookChanger: (value: string) => void;
  shelf?: string;
}

export const BookShelfChanger = ({
  bookChanger,
  shelf,
}: bookShelfChangerProps) => {
  return (
    <div className='book-shelf-changer'>
      <select
        onChange={async (e) => {
          await bookChanger(e.target.value);
        }}
        value={shelf}
      >
        <option value='move' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};
