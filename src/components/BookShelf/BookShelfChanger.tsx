interface bookShelfChangerProps {
  bookChanger: (value: string) => void;
}

export const BookShelfChanger = ({ bookChanger }: bookShelfChangerProps) => {
  // set the states
  return (
    <div className='book-shelf-changer'>
      <select onChange={(e) => bookChanger(e.target.value)}>
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
