let intervalId; // Variable to store the interval ID

function moveSliderLeft() {
    intervalId = setInterval(function () {
        document.getElementById("slider").scrollLeft -= 10; // Adjust the scroll speed as needed
    }, 10); // Adjust the interval duration as needed
}

function stopSliderMovement() {
    clearInterval(intervalId);
}

document.getElementById("left").addEventListener("click", function () {
    moveSliderLeft();
});

document.getElementById("left").addEventListener("mouseup", function () {
    stopSliderMovement();
});

document.getElementById("right").addEventListener("click", function () {
    intervalId = setInterval(function () {
        document.getElementById("slider").scrollLeft += 10; // Adjust the scroll speed as needed
    }, 10); // Adjust the interval duration as needed
});

document.getElementById("right").addEventListener("mouseup", function () {
    stopSliderMovement();
});
