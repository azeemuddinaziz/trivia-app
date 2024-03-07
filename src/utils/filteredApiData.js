import { nanoid } from "nanoid";
import dangerousDecodeEntities from "./dangerousDecodeEntities.js";
import randomSortArray from "./randomSortArray.js";

export default function fiterApiData(rawData) {
  //Here raw data is an Object provided by fetch API call in App.js
  let results = rawData.results;
  let filteredData = [];

  //.map(item => ({value: item, id: nanoid(), isSelected: false, isCorrect:false}))

  results.map((rawItem) => {
    //I used rawItem name to differentiate between the `item` word below map() method.
    let options = [rawItem.correct_answer, ...rawItem.incorrect_answers];

    options = options.map((item) => {
      //Here, I used `item` to differentiate from `rawItem`
      return {
        value: item,
        id: nanoid(),
        isCorrect: item === rawItem.correct_answer ? true : false,
        isSelected: false,
      };
    });

    // options.map((item) =>
    //   console.log({
    //     value: item,
    //     isSelected: false,
    //     isCorrect: item === item.correct_answer ? true : false,
    //   })
    // );

    let filteredItem = {
      success: true,
      id: nanoid(),
      question: dangerousDecodeEntities(rawItem.question),
      options: randomSortArray(options),
    };
    filteredData.push(filteredItem);
  });

  return filteredData;
}
