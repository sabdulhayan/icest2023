const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


// typewriter animation 
const features = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Software Testing",
    "SAAS Products"
    // Add more features here
];

let currentIndex = 0;
const textElement = document.getElementById("typewriter-text");

function typeWriter() {
    if (currentIndex < features.length) {
        const currentFeature = features[currentIndex];
        currentIndex++;
        typeEffect(currentFeature, 0); // Start typing animation for the current feature
    } else {
        currentIndex = 0; // Reset index to loop through the features again
        typeEffect(features[currentIndex], 0); // Start typing animation for the first feature
    }
}

function typeEffect(text, charIndex) {
    if (charIndex < text.length) {
        const currentText = text.substring(0, charIndex + 1);
        textElement.textContent = currentText;
        charIndex++;
        setTimeout(() => typeEffect(text, charIndex), 100); // Adjust the duration as needed for the typing speed
    } else {
        // Typing for this text is complete, wait for a few seconds and then delete the characters
        setTimeout(() => deleteEffect(text, text.length - 1), 1000); // Adjust the duration as needed for the wait time
    }
}

function deleteEffect(text, charIndex) {
    if (charIndex >= 0) {
        const currentText = text.substring(0, charIndex);
        textElement.textContent = currentText;
        charIndex--;
        setTimeout(() => deleteEffect(text, charIndex), 50); // Adjust the duration as needed for the deletion speed
    } else {
        // Deletion for this text is complete, wait for a few seconds and then call typeWriter again
        setTimeout(typeWriter, 1000); // Adjust the duration as needed for the wait time
    }
}

typeWriter();