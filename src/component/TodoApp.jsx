import React, { useState, useEffect } from "react";
import Todo from "./Todo";


function Taskly() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

useEffect(() => {
  const saved = localStorage.getItem("todos");
  if (saved) {
    setTodos(JSON.parse(saved));
  }
}, []);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);


  return (
  <div className="min-h-screen bg-black flex items-center justify-center p-4">
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
      <h1 className="text-center text-orange-600 text-4xl font-bold mb-6 tracking-wide">
        Taskly
      </h1>

      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-1 border border-orange-300 rounded-xl px-4 py-2 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="What's  do you want to achieve?"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all"
        >
          Add
        </button>
      </div>

     <div className="mt-8">
  <h2 className="text-orange-700 text-2xl font-semibold mb-4">Your Tasks</h2>

  <p className="text-sm text-gray-600 mb-4">
    {todos.filter((t) => !t.completed).length} tasks remaining
  </p>

  {todos.length > 0 ? (
    <div className="space-y-3">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  ) : (
    <p className="text-gray-00 text-center mt-6">
      All tasks are completed. Hurray!!!!
    </p>
  )}
</div>

    </div>
  </div>
);
}

export default Taskly;
