// Function to toggle the flip effect for the flashcards
function flipCard(card) {
    // Toggles the 'flipped' class to flip the card
    card.classList.toggle('flipped');
}

// Select all flashcards and add event listener to flip on click
document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => {
        flipCard(card);  // Flip the card when clicked
    });
});

// Select all elements you want to animate (fade-in effect)
const fadeElements = document.querySelectorAll('.fade');

// Create an intersection observer to detect when an element enters the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class to trigger the fade-in
            observer.unobserve(entry.target); // Stop observing the element after it becomes visible
        }
    });
}, { threshold: 0.5 }); // The element should be at least 50% visible

// Observe each fade element
fadeElements.forEach(element => {
    observer.observe(element);
});

// Array of flashcards with question and answer
const flashcards = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },
    {
        question: "What is CSS?",
        answer: "CSS stands for Cascading Style Sheets."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language for the web."
    },
    {
        question: "What is the purpose of the <head> tag in HTML?",
        answer: "The <head> tag contains meta-information about the HTML document, such as title, links to stylesheets, and scripts."
    },
    {
        question: "What is the difference between class and id in CSS?",
        answer: "The 'id' selector is unique for one element on a page, while 'class' can be used for multiple elements."
    },
    {
        question: "What is the CSS property used to change the background color?",
        answer: "The CSS property used to change the background color is 'background-color'."
    },
    {
        question: "What is a function in JavaScript?",
        answer: "A function in JavaScript is a block of code designed to perform a particular task when called."
    },
    {
        question: "What is the difference between let, const, and var in JavaScript?",
        answer: "'let' and 'const' are block-scoped, while 'var' is function-scoped. 'const' is used for constants and 'let' for variables that can change."
    },
    {
        question: "What is Flexbox in CSS?",
        answer: "Flexbox is a layout model in CSS that allows you to align and distribute items within a container, even when their size is unknown or dynamic."
    },
    {
        question: "What is a JavaScript array?",
        answer: "A JavaScript array is an ordered collection of values, which can be of any type and can be accessed using an index."
    },
    {
        question: "What is an API in JavaScript?",
        answer: "An API (Application Programming Interface) in JavaScript allows different software systems to communicate and exchange data. It is often used for web services."
    },
    {
        question: "What is a CSS pseudo-class?",
        answer: "A CSS pseudo-class is used to define the special state of an element, such as :hover for when an element is being hovered over."
    },
    {
        question: "What is a CSS media query?",
        answer: "A CSS media query is used to apply styles based on the device's characteristics, such as its width or resolution."
    },
    {
        question: "How do you add a link to a webpage in HTML?",
        answer: "To add a link, use the <a> tag with the href attribute, like <a href='https://example.com'>Link</a>."
    }
];

let currentIndex = 0; // Keep track of the current flashcard

// Function to update the flashcard content
function updateFlashcard() {
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const flashcard = document.getElementById('flashcard');
    
    // Update the question and answer text
    questionElement.textContent = flashcards[currentIndex].question;
    answerElement.textContent = flashcards[currentIndex].answer;
    
    // Remove the flipped class to ensure it shows the question side
    flashcard.classList.remove('flipped');
}

// Function to go to the next flashcard
document.getElementById('next-button').addEventListener('click', () => {
    // Increment the index and loop back if at the last card
    currentIndex = (currentIndex + 1) % flashcards.length;
    
    // Update the flashcard content and reset flip (show question side)
    updateFlashcard();
});

// Initial setup
updateFlashcard();  // Update flashcard on page load


// Complex form Javascript 

// JavaScript for form submission handling

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the form
    document.getElementById('contact-form').addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const form = event.target; // The form being submitted
        const formData = new FormData(form); // Collect form data

        // Send the form data using the Fetch API
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        });

        const messageContainer = document.getElementById('form-message');

        if (response.ok) {
            // Show success message
            messageContainer.textContent = 'Thank you! Your submission has been received.';
            messageContainer.style.display = 'block';
            form.reset(); // Reset the form
        } else {
            // Show error message
            messageContainer.textContent = 'Oops! There was an error submitting the form. Please try again.';
            messageContainer.style.display = 'block';
            messageContainer.style.color = 'red'; // Change text color for error
        }
    });
});
