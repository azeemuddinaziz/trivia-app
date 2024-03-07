export default function Option(props) {
  let additionalClass = "";

  if (!props.finished && props.selected) {
    additionalClass = "selected";
  } else if (props.finished && props.correct) {
    additionalClass = "correct";
  } else if (props.finished && props.selected && !props.correct) {
    additionalClass = "incorrect";
  }

  return (
    <div className={`option  ${additionalClass}`} onClick={props.handleClick}>
      {props.value}
    </div>
  );
}
