// Select the paragraph and button elements
const paragraph = document.querySelector('.show');
const toggleButton = document.getElementById('toggle-button');

// Add a click event listener to the button
toggleButton.addEventListener('click', () => {
	// Toggle the 'hidden' class on the paragraph
	paragraph.classList.toggle('hidden');
});