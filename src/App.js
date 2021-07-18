import { useEffect, useState } from "react";
import Message from "./Message";
import "./styles.css";

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input type="text" placeholder="elon@spacex.com" value="" />
        <input type="submit" value="submit" />
      </form>
      <button>Lougout</button>
    </div>
  );
}
