/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  const image = document.querySelector("#image");
  image.src = "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";

  document.querySelector("#javascriptLink").href =
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  document.querySelector("#victorious").textContent = "I am victorious!";

  document.querySelector("#inlineStyles").style.backgroundColor = "white";

  const dangerNoMore = document.querySelector("#dangerNoMore");
  dangerNoMore.classList.add("text-dark");

  document.querySelector("#hideMe").style.display = "none";

  document.querySelector("#abraKadabra").classList.remove("hidden");

  const button = document.querySelector("#thisButton");
  if (button.classList.contains("btn-primary")) {
    document.querySelector("#buttonOutput").textContent = "✓ blue";
  }
})();
