
export default function Tick() {
  return (
    <div>
      <h1>Date</h1>
      <h2>The time is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}
setInterval(Tick, 1000);

// ReactDOM.render(<Tick />, document.getElementById("root"));
