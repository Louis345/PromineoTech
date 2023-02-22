!(function () {
  /**
   * When the user clicks on one of the "Select" buttons to select a plan,
   * display the following message in the aqua green notification at the top of the screen,
   * where "Premium" is the name of the plan that user selected:
   * "Thank you for purchasing the Premium plan!"
   *
   * You must use "document.querySelectorAll" to solve this problem.
   *
   * You can edit the HTML on the page to solve this problem.
   *
   * As a bonus, you can hide the notification before the user selects a plan.
   * You can also make the "x" icon dismiss the notification.
   */
  // Write your answer here

  // Targets all the "Select" buttons
  const pricingPlanButtons = document.querySelectorAll(".pricing-plan button");

  // Targets the success message
  const notificationMessage = document.querySelector("#notificationMessage");
  const notification = document.querySelector("#notification");

  // Loops through the buttons on the page
  pricingPlanButtons.forEach((plan) => {
    // React to when a user clicks on a button
    plan.addEventListener("click", () => {
      // I set the button ID as the name of the plan. Changing the success message to include the name of the plan.
      notificationMessage.textContent = `Thank you for purchasing the ${plan.id} plan!`;

      // Shows the hidden success message
      notification.style.display = "block";
    });
  });
})();
