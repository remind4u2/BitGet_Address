// Function to simulate a click on the "Add new address" button
function clickAddNewAddressButton() {
  var addNewAddressButton = document.querySelector('.bit-button--main.bit-button--medium.is-round');
  if (addNewAddressButton) {
    addNewAddressButton.click();
  }
}

// Function to repeatedly click the button with a delay
function clickButtonMultipleTimes(count, delay) {
  var i = 0;
  var intervalId = setInterval(function () {
    clickAddNewAddressButton();
    i++;

    // Check if all clicks are done
    if (i === count) {
      clearInterval(intervalId);
    }
  }, delay);
}

// Call the function to click the button 10 times with a 0.2-second delay
clickButtonMultipleTimes(49, 800);
