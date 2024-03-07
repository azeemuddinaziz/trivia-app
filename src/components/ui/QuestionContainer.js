import { useEffect, useState } from "react";
import Question from "./Question";

export default function QuestionContainer(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.data && props.data.length > 0) {
      setData(props.data);
    }
  }, [props.data]);

  function dataFromQuestionComponent(id, data) {
    const newData = (props.data || []).map((item) => {
      if (item.id === id) {
        item = data;
        return item;
      } else {
        return item;
      }
    });

    props.handleData(newData);
  }

  //For key prop warning only, I do not use this.
  let key = 1;

  const questionComponentsElements = props.data.map((item) => {
    return (
      <>
        <Question
          data={item}
          id={item.id}
          key={key++}
          handleData={dataFromQuestionComponent}
          finished={props.finished}
        />
      </>
    );
  });

  return <div>{questionComponentsElements}</div>; //This array has 'Question' Components mapped from the prop data.
}
