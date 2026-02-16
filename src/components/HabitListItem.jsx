import ProgressActions from "./ProgressActions";

function HabitListItem({ habit, changeProgress }) {
  return (
    <li>
      <p>
        {habit.title} : {habit.progress}
      </p>

      <ProgressActions
        increase={() => changeProgress(habit.id, 1)}
        decrease={() => changeProgress(habit.id, -1)}
      />
    </li>
  );
}

export default HabitListItem;
