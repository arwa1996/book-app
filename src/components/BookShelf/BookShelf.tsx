import React from 'react';

interface BookShelfProps {
  title?: string;
  children?: React.ReactNode;
}

export const BookShelf = ({ title, children }: BookShelfProps) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>{children}</div>
    </div>
  );
};
