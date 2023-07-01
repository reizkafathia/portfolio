import React, { useEffect, useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import close from './../assets/images/close.png';
import Footer from '../components/Footer';

function TodoListPage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="bg-image min-h-screen">
      <Header />
      <div className="windows-container mx-auto">
        <h1 className="profile-bar text-white font-mono">
          To-Do List
          <img
            src={close}
            alt="Close"
            className="windows-close cursor-pointer"
          />
        </h1>

        <div className="flex font-mono m-4">
          <input
            type="text"
            className="windows-white p-2 w-96"
            placeholder="Enter a new task"
            value={newTodo}
            onChange={handleInputChange}
          />
          <button
            className="windows-button text-black py-2 px-4 hover:font-bold"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>

        <ul className="space-y-2 mx-4 pb-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="windows-button flex  items-center font-mono w-96 pl-4 pr-6"
            >
              <span className="flex-1">{todo}</span>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold font-mono my-2 py-2 px-4 "
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default TodoListPage;
