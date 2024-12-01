// Handle the recommendation form submission
document.querySelector('.recommendation-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    
    // Get the name and message from the form
    const name = document.querySelector('input[name="name"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
  
    // Validate the message input
    if (message.trim() === "") {
      alert("Please enter a recommendation message!");
      return;
    }
  
    // Create a new recommendation card
    const recommendationGrid = document.querySelector('.recommendations-grid');
    const newCard = document.createElement('div');
    newCard.className = 'recommendation-card';
    newCard.innerText = name ? `${message} - ${name}` : message;
  
    // Add the new card to the grid
    recommendationGrid.appendChild(newCard);
  
    // Clear the form inputs
    document.querySelector('input[name="name"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  
    alert("Thank you for your recommendation!");
  });
  