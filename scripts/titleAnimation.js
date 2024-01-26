document.addEventListener("DOMContentLoaded", () => {
    const titleText = "./Amxgh";
    const titleElement = document.querySelector(".amxgh-title");
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
            bodyElement.style.color = "white";
        }, totalDuration * 4);
    }, 700); // Adjust the duration as needed

    setTimeout(() => {
        for (let i = 2; i < titleText.length; i++) {
            setTimeout(() => {
                titleElement.textContent += titleText[i];
            }, i * 200);
        }
    }, 2600);
});
