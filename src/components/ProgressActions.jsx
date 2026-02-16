function ProgressActions({ increase, decrease }) {
  return (
    <div>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default ProgressActions;
