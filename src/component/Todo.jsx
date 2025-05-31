import React from "react";

function Todo({ todo, completeTodo, deleteTodo }) {
  return (
    <div
      className={`flex justify-between items-center px-4 py-2 rounded-xl ${
        todo.completed
          ? "bg-green-700/50 line-through text-white/70"
          : "bg-white/10 text-white"
      }`}
    >
    
     <p className="text-left text-gray-800 font-bold mb-4">{todo.text}</p>

<div className="flex gap-2">
  {!todo.completed && (
    <input
  type="checkbox"
  checked={todo.completed}
  onChange={() => completeTodo(todo.id)}
  className="mr-2"
/>

  )}
  <button
    onClick={() => deleteTodo(todo.id)}
    className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full shadow transition-all"
  >
    Delete
  </button>
</div>

    </div>
  );
}

export default Todo;

