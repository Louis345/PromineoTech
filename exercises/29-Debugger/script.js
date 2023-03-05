const checkInput = (value) => {
  if (value == "" || isNaN(value)) {
    return false;
  } else {
    return true;
  }
};

(() => {
  const input1 = document.querySelector("#input1");
  const input2 = document.querySelector("#input2");
  const submitButton = document.querySelector("#submit-button");
  const resultOutput = document.querySelector("#result-output");

  submitButton.addEventListener("click", () => {
    if (checkInput(input1.value) && checkInput(input2.value)) {
      const result = input1.value + input2.value;
      resultOutput.innerHTML = result;
    } else {
      resultOutput.innerHTML = "Please enter valid numbers";
    }
  });
})();
