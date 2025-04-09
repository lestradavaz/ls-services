/**
 * Typing animation for the "typed-text" element
 */

// Words to cycle through
const words = ['negocio', 'empresa', 'startup', 'proyecto', 'e-commerce'];

// Configuration
const typingSpeed = 100; // milliseconds per character
const deletingSpeed = 50; // milliseconds per character
const pauseBetweenWords = 750; // milliseconds to wait after typing a word
const pauseBeforeDeleting = 1500; // milliseconds to wait before deleting a word

// Variables to control the animation
let currentWordIndex = 0;
let isDeleting = false;
let text = '';
let timeout: number | undefined;

function typeEffect() {
    const targetElement = document.getElementById('typed-text');
    if (!targetElement) {
        // If element not found yet, try again in a bit
        timeout = setTimeout(typeEffect, 100);
        return;
    }

    const currentWord = words[currentWordIndex];

    // Calculate the time for the next operation
    let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (isDeleting) {
        // Remove one character
        text = currentWord.substring(0, text.length - 1);
    } else {
        // Add one character
        text = currentWord.substring(0, text.length + 1);
    }

    // Update the element
    targetElement.textContent = text;

    // Determine the next step
    if (!isDeleting && text === currentWord) {
        // We've completed typing the word
        typeSpeed = pauseBeforeDeleting;
        isDeleting = true;
    } else if (isDeleting && text === '') {
        // We've completed deleting the word
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        typeSpeed = pauseBetweenWords;
    }

    // Schedule the next update
    timeout = setTimeout(typeEffect, typeSpeed);
}

// Start the animation immediately
typeEffect();

// Export a cleanup function
export function cleanupTypingAnimation() {
    if (timeout) {
        clearTimeout(timeout);
    }
}
