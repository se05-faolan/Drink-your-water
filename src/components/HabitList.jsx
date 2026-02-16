import HabitListItem from "./HabitListItem";

function HabitList({ habits, changeProgress }) {
  if (habits.length === 0) {
    return <p>No habits yet</p>;
  }

  return (
    <ul>
      {habits.map((habit) => {
        return (
          <HabitListItem
            key={habit.id}
            habit={habit}
            changeProgress={changeProgress}
          />
        );
      })}
    </ul>
  );
}

export default HabitList;
