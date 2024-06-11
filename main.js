// Function to add a text item to the screen with a blinking effect
const addItem = async (item) => {
  // Wait for a random delay
  await randomDelay();

  // Create a new div element and set its inner HTML to the item
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);

  // Create an interval that adds and removes dots at the end of the text every 500ms
  let interval = setInterval(() => {
    div.innerHTML = div.innerHTML.endsWith('.....') ? item : div.innerHTML + '.';
  }, 500);

  // Return the interval ID so we can clear it later
  return interval;
}

// Function to create a promise that resolves after a random delay
const randomDelay = () => {
  return new Promise(resolve => {
    let timeout = 1000 + Math.random() * 2000; // Random delay between 1 and 3 seconds
    setTimeout(resolve, timeout); // Resolve the promise after the timeout
  });
}

// Main function to execute the sequence of messages
async function main() {
  // Uncomment the following alerts if you want to show these messages when the script starts
  alert('Welcome');
  alert('Access this device');
  alert('Wait please.....');

  let messages = [
    'Reading your files',
    'Reading your data',
    'Password files detected',
    'Sending all password and personal files to server',
    'Finishing up'
  ];

  let intervals = []; // Array to hold interval IDs

  // Loop through each message, add it to the screen, and store its interval ID
  for (let msg of messages) {
    let interval = await addItem(msg);
    intervals.push(interval);
  }

  // After 5 seconds, clear all intervals and display the final message
  setTimeout(() => {
    intervals.forEach(clearInterval); // Clear all intervals to stop the blinking effect
    document.body.innerHTML = ''; // Clear the screen
    document.body.innerHTML = 'Your device is hacked successfully'; // Display the final message
  }, 5000); // 5-second delay before showing the final message
}

// Start the main function
main();