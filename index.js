const form = document.querySelector('form');
const intentsDiv = document.querySelector('#intents');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the selected values of the dropdowns
  const q1 = document.querySelector('#question1').value;
  const q2 = document.querySelector('#question2').value;
  const q3 = document.querySelector('#question3').value;

  // Determine the necessary intents based on the user's answers
  let intents = [];
  if (q1 === 'yes') {
    intents.push('PRESENCE_INTENT');
  }
  if (q2 === 'yes') {
    intents.push('SERVER_MEMBERS_INTENT');
  }
  if (q3 === 'yes') {
    intents.push('MESSAGE_CONTENT_INTENT');
  }

  // Display the results as an unordered list
  if (intents.length > 0) {
    const ul = document.createElement('ul');
    intents.forEach(intent => {
      const li = document.createElement('li');
      li.textContent = intent;
      ul.appendChild(li);
    });
    intentsDiv.innerHTML = '<p></p>';
    intentsDiv.appendChild(ul);
  } else {
    intentsDiv.innerHTML = '<p>Bot do not require any additional intent.</p>';
  }
});
