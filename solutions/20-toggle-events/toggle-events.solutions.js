(function () {
  /**
   * Problem 1: Dismiss the "Accept Cookies" popup
   *
   * When the user clicks on the "Accept Cookies" button, the "Accept Cookies" popup should disappear.
   */

  // Step 1 Target
  const acceptCookiesPopup = document.querySelector("#acceptCookiesPopup");
  const acceptCookiesButton = document.querySelector("#acceptCookiesButton");

  // Step 3 Do something
  const dismissPopup = () => {
    acceptCookiesPopup.style.display = "none";
  };

  // Step 2 React to an event
  acceptCookiesButton.addEventListener("click", dismissPopup);

  /**
   * Problem 2: Show comments for the news story.
   *
   * You will need modify the HTML so that you can target HTML elements o the page.
   *
   * You will be toggling the comments on the page.
   * If the comments are hidden, this should happen when the user clicks on the "View Comments" button:
   * 1. The comment section should appear
   * 2. The "View Comments" button will change to say "Hide Comments"
   *
   * If the comments are visible, this should happen when the user clicks on the "Hide Comments" button:
   * 1. The comments sections should disappear
   * 2. The "Hide Comments" button should change to say "View Comments"
   *
   * HINT: Right now, the comments are hidden because they have the class ".hidden",
   * but you can switch up the HTML so that it uses inline styles if you like.
   */

  // Step 1 Target
  const toggleComments = document.querySelector("#toggleComments");
  const comments = document.querySelector("#comments");

  // Step 2 React to an event
  toggleComments.addEventListener("click", () => {
    // Step 3 Do something
    // Show comments if they are hidden
    if (comments.classList.contains("hidden")) {
      comments.classList.remove("hidden");
      toggleComments.textContent = "Hide Comments";
    } else {
      // Hide comments if they are not hidden
      comments.classList.add("hidden");
      toggleComments.textContent = "Show Comments";
    }
  });
})();
