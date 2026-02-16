import { useState, useEffect } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    console.log("Updated habits", habits);
  }, [habits]);

  function addHabit(title) {
    const newHabit = {
      id: Date.now(),
      title: title,
      progress: 0,
    };

    setHabits([...habits, newHabit]);
  }

  function changeProgress(id, amount) {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          progress: habit.progress + amount,
        };
      }
      return habit;
    });

    setHabits(updatedHabits);
  }

  return (
    <div>
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} changeProgress={changeProgress} />
    </div>
  );
}

export default App;
