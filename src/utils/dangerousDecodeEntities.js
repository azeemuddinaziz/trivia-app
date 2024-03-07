const dangerousDecodeEntities = (html) => {
  const element = document.createElement("div");
  element.innerHTML = html;
  return element.textContent || element.innerText;
};

export default dangerousDecodeEntities;
