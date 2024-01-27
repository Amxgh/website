document.addEventListener("DOMContentLoaded", () => {
    const titleText = "./Amxgh";
    const titleElement = document.querySelector(".amxgh-title");
    const titleDiv = document.querySelector(".title-div");
    const welcomeText = "Hi, I'm Amogh"
    const welcomeTextElement = document.querySelector(".welcome-text");

    const bodyElement = document.body;

    // Set initial content
    titleElement.textContent = titleText.substring(0, 2);

    // Animate typing effect
    for (let i = 2; i < titleText.length; i++) {
        setTimeout(() => {
            titleElement.textContent += titleText[i];
        }, i * 100); // Adjust the duration as needed
    }

    // Start the second part of the animation
    setTimeout(() => {
        for (let i = titleText.length; i > 1; i--) {
            setTimeout(() => {
                titleElement.textContent = titleText.slice(0, i);
            }, (titleText.length - i) * 250); // Adjust the duration as needed
        }

        const totalDuration = (titleText.length - 2) * 100;

        // Start the third animation after the second one ends
        setTimeout(() => {
            // Your code for the third animation goes here
            // For example, you can change the color of the text
            bodyElement.style.backgroundColor = "black";
            bodyElement.style.color = "#e8cafa";
        }, totalDuration * 4);
    }, 700); // Adjust the duration as needed

    setTimeout(() => {
        for (let i = 2; i < titleText.length; i++) {
            setTimeout(() => {
                titleElement.textContent += titleText[i];
            }, i * 200);
        }
    }, 2600);

    setTimeout(() => {
        titleDiv.style.fontSize = "50px";
        titleDiv.style.display = "flex";
        titleDiv.style.transform = "translatey(-40%)";
        titleDiv.style.top = "50px";
        titleDiv.style.left = "50%";
    }, 4000);

    // Trigger the animation when the page is loaded
    setTimeout(() => {
        for (let i = 0; i < welcomeText.length+1; i++) {
            setTimeout(() => {
                welcomeTextElement.textContent = welcomeText.slice(0,i);
            }, i * 200);
        }
    }, 5000); // Adjust the delay based on your preference
});
