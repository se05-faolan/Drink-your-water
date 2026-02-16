import { useState } from "react";

function HabitForm({ addHabit }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (text === "") {
      return;
    }

    addHabit(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter habit"
      />
      <button>Add habit</button>
    </form>
  );
}

export default HabitForm;
