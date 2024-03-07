export async function triviaQuestions() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
  );
  const json = await response.json();

  if (json.response_code === 0) {
    return json;
  } else {
    return triviaQuestions();
  }
}
