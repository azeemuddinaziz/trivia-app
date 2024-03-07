export default function StartPage(props) {
  return (
    <div className="container start">
      {props.highScore !== null && <h4>Best Score: {props.highScore}</h4>}
      <h1>Quizzical</h1>
      <p>Press to start the quiz</p>
      <button onClick={props.handleClick}>Start quiz</button>
    </div>
  );
}
