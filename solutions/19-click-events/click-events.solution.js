(function () {
  /**
   * You have two challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Alert Me
   * When the clicks on the button that says "Alert Me!", it should display an alert.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
   */

  // Step 1 Target
  const alertButton = document.querySelector("#alertMe");

  // Step 2 React to the event
  alertButton.addEventListener("click", () => {
    // Step 3 Do something
    // The thing that happens after the event occurs
    alert("Alert Me!");
  });

  /**
   * Problem 2: Disable a button that will charge a credit card.
   *
   * To prevent users from charging the credit card more than once:
   * 1. Disable the button when it is clicked.
   * 2. Change the text to say e.g. "Loading ..." once it is clicked.
   */

  // Step 1 Target
  const chargeButton = document.querySelector("#chargeCreditCard");
  chargeButton.type = "submit";

  // Step 2 React to an event
  const reactToCharge = () => {
    // Step 3 Do something - disable the button and change the test to say loading
    chargeButton.disabled = "disabled";
    chargeButton.textContent = "Loading ...";
  };
  chargeButton.addEventListener("click", reactToCharge);
})();
