import React from 'react';
import '../App.css';
import gif1 from './../assets/images/red.gif';
import cat from './../assets/images/cat.gif';
import close from './../assets/images/close.png';
import starwars from './../assets/images/starwars.gif';
import a51 from './../assets/images/a51_2800.gif';
import windah from './../assets/images/windah.png';
import duck from './../assets/images/duck.gif';
import ironman from "./../assets/images/iron man.gif";

function Body() {
  return (
    <div>
      <img
        src={gif1}
        alt="Red Ghost from Pacman"
        className="w-12 h-auto animate-spin ml-16"
      />
      <img
        src={cat}
        alt="Cat with Pizza"
        className="w-48 h-auto absolute top-64 right-10"
      />
      <div className="container mx-auto ml-auto mr-auto max-w-2xl flex justify-center items-center h-auto m-20">
        <div className="text-yellow-500 text-4xl font-bold font-serif pt-20 inline-block animate-left-to-right">
          HELLO WORLD
        </div>
      </div>

      <div className="windows-container mx-auto h-auto">
        <div className="profile-bar font-mono font-bold text-white px-4">
          Profile
          <img
            src={close}
            alt="Close"
            className="windows-close cursor-pointer"
          />
        </div>
        <div className="font-mono text-center p-4">
          My name is <u className="text-indigo-800">Reizka Fathia</u>, an
          Undergraduate Mathematics student at Universitas Indonesia
          <div className="pt-4">
            I live on Earth and love watching horror gaming videos of Windah
            Basudara :D
          </div>
          <img
            src={windah}
            alt="Windah Basudara"
            className="windows-pressed mx-auto my-4 p-1 w-3/4"
          />
          <div>
            I am a newbie in the world of web development, but I am enthusiastic
            and eager to learn and grow in this dynamic field
          </div>
          <img src={duck} alt="Baby Duck" className="mx-auto w-60 h-auto" />
        </div>
      </div>

      <img src={starwars} alt="Star Wars" className="w-96 h-auto" />
      <img
        src={a51}
        alt="Area 51"
        className="w-32 h-auto mx-auto mt-16 mb-52"
      />

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-pink-500 text-center text-xl font-serif p-6">
          <u>Skills and Experience in Web Development</u>
        </div>
        <div className="font-sans text-md text-center text-gray-300 mx-10">
          My journey in web development began with my first project, which is
          currently a work in progress. As I continue to work on this second
          project (<u>with a special thanks to GDSC UI</u>), I have been able to
          deepen my understanding and expand my knowledge of HTML, CSS,
          JavaScript, and React. However, there is still more for me to learn.
        </div>
        <img src={ironman} alt="Iron Man Once Said" className="my-20" />
        <div className="windows-white m-6 py-2 px-10 text-black">
          Skills (All of my skills are still at a beginner level) :
          <ul className="list-disc">
            <li>Python ★★☆☆☆</li>
            <li>JavaScript ★★☆☆☆</li>
            <li>HTML & CSS ★★☆☆☆</li>
            <li>Figma ★☆☆☆☆</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Body;