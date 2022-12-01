let sliderImages = document.querySelectorAll(".slide"),
arrowleft = document.querySelector("#arrow-left"),
arrowright = document.querySelector("#arrow-right"),
current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

function startSlide() {
    reset();
    sliderImages[current - 1].style.display = "block";
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

arrowleft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

arrowright.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
});

startSlide();