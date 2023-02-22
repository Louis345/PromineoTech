(function () {
  /**
   * You have three challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Rendering what a user is typing on the page.
   *
   * When the user types inside the textbook labeled "Enter mystery text here",
   * it should display what the user is typing in the <div></div> tags below.
   */

  // Step 1: Target
  const mysteryText = document.querySelector("#mysteryText");
  const showUserText = document.querySelector("#mysteryTextDisplay");

  const callback = (event) => {
    // Step 3: Do something - display the text that the user is typing to the screen
    showUserText.textContent = event.target.value;
  };

  // Step 2: React to Event
  mysteryText.addEventListener("input", callback);

  /**
   * Problem 2: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */

  // Step 1: Target
  const oceanForm = document.querySelector("#handleThisForm");
  const oceanInput = document.querySelector("#oceanInput");
  const oceanDisplay = document.querySelector("#oceanOutput");

  // Step 2: React to event
  oceanForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Step 3: Do something - stop the form from refreshing and display "No results for ____ found".
    oceanDisplay.textContent = `No results for ${oceanInput.value} found`;
  });

  /**
   * Problem 3: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */

  // Step 1: Target
  const terms = document.querySelector("#terms");
  const termsError = document.querySelector("#termsError");
  const termsSuccess = document.querySelector("#termsSuccess");
  const checkbox = document.querySelector("#terms");

  // Step 3: Do something

  const showTermsError = () => {
    // Makes "I Agree to the Terms and Conditions" red
    if (!terms.classList.contains("is-invalid")) {
      terms.classList.add("is-invalid");
    }

    // Hides success message
    if (!termsSuccess.classList.contains("hidden")) {
      termsSuccess.classList.add("hidden");
    }

    // Shows error message
    if (termsError.classList.contains("hidden")) {
      termsError.classList.remove("hidden");
    }
  };

  const showTermsSuccess = () => {
    // Reverts "I Agree to the Terms and Conditions" back to original color
    if (terms.classList.contains("is-invalid")) {
      terms.classList.remove("is-invalid");
    }

    // Hides success message
    if (termsSuccess.classList.contains("hidden")) {
      termsSuccess.classList.remove("hidden");
    }

    // Shows error message
    if (!termsError.classList.contains("hidden")) {
      termsError.classList.add("hidden");
    }
  };

  // Step 2: React to an event
  document.querySelector("#termsForm").addEventListener("submit", (event) => {
    event.preventDefault();

    if (checkbox.checked) {
      showTermsSuccess();
    } else {
      showTermsError();
    }
  });
})();
