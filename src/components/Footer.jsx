import React from 'react';
import chicken from './../assets/images/chicken.gif';
import affection from './../assets/images/affection.gif';

function Footer() {
  return (
    <div>
      <img src={chicken} alt="Chicken" className="mx-auto my-16 w-32" />
      <div className="text-yellow-200 text-center mx-auto mt-10">
        Find me on:
      </div>
      <div className="flex text-yellow-200 items-center justify-center mt-5 px-12 pb-6 space-x-4">
        <a
          href="https://www.linkedin.com/in/reizkafathia"
          target="_blank"
          className="cursor-pointer hover:text-purple-400 underline underline-offset-2"
        >
          LinkedIn
        </a>
        <span className="mx-4">|</span>
        <a
          href="https://instagram.com/reizfathia?igshid=MmIzYWVlNDQ5Yg=="
          target="_blank"
          className="cursor-pointer hover:text-purple-400 underline underline-offset-2"
        >
          Instagram
        </a>
        <span className="mx-4">|</span>
        <a
          href="mailto:reizka.fathia@sci.ui.ac.id"
          target="_blank"
          className="cursor-pointer hover:text-purple-400 underline underline-offset-2"
        >
          Drop an Email
        </a>
      </div>
      <img
        src={affection}
        alt="Made With Love"
        className="mx-auto my-10 w-26"
      />
      <div className="text-yellow-200 text-center pb-10">© 2023</div>
    </div>
  );
}

export default Footer