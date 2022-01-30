import React from 'react';
import './style.css';
import clsx from 'clsx';

// const currentURL = window.location.href; // returns the absolute URL of a page
// const pathname = window.location.pathname;
// console.log(currentURL, ' ', pathname);

export default function Message2({ isError }) {
  return (
    <div>
      <p
        className={clsx('bold-text', {
          success: !isError,
          error: isError,
        })}
      >
        This is a message2 class conditioning using CLSX
      </p>
    </div>
  );
}
