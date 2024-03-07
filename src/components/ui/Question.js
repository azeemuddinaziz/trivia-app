import dangerousDecodeEntities from "../../utils/dangerousDecodeEntities";
import Option from "./Option";
import { nanoid } from "nanoid";

export default function Question(props) {
  function optionSelectToggle(id) {
    const optionArr = props.data.options;
    const newArr = optionArr.map((item) => {
      if (item.id !== id) {
        if (item.isSelected) {
          return { ...item, isSelected: false };
        } else {
          return item;
        }
      } else {
        return { ...item, isSelected: !item.isSelected };
      }
    });
    const newObj = { ...props.data, options: newArr };
    props.handleData(props.id, newObj);
  }

  return (
    <div className="question">
      <h4>{props.data.question}</h4>
      <div className="options-container">
        {props.data.options.map((option) => {
          return (
            <Option
              id={option.id}
              value={dangerousDecodeEntities(option.value)}
              selected={option.isSelected}
              handleClick={() => optionSelectToggle(option.id)}
              correct={option.isCorrect}
              finished={props.finished}
              key={nanoid()}
            />
          );
        })}
      </div>
    </div>
  );
}
