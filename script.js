const photos = [
    "images/Milky Way.jpg",
    "images/Elmo.jpg",
    "images/Latte.jpg",
    "images/Bingus.jpg",
    "images/Cape May.jpg",
    "images/Beach.jpg",
    "images/Northern Lights.jpg",
    "images/Barcelona.jpg",
    "images/Morocco.jpg",
    "images/Kerala.jpg",
    "images/Cake.jpg",
    "images/Banff.jpg",
    "images/Dubai.jpg",
    "images/Horses.jpg",
    "images/Key West.jpg",
    "images/Mt Rainier.jpg",
    "images/Turkey.jpg",
    "images/Greece.jpg",
];

const captions = [
    "The Milk Way, as seen from Washington",
    "My cat, ELmo",
    "Making a fun latte",
    "My other cat, Bingus",
    "Cape May, New Jersey",
    "Black Sand Beach, Iceland",
    "The Northern Lights, seen from Iceland.",
    "Barcelona, Spain",
    "Exploring Morocco",
    "Kerala, India",
    "A cake I baked for a friend's birthday party.",
    "Banff, Canada",
    "Dubai's Arabian Desert",
    "An Icelandic horse friend I made",
    "Duck Key, Florida",
    "Mt Rainer, Washington",
    "Hagia Sophia, Turkey",
    "The Parthenon, Greece"
];

let currentPhoto = 0;

const slideshowImage = document.getElementById("slideshow-image");
const slideshowCaption = document.getElementById("slideshow-caption");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const dotsContainer = document.querySelector(".slideshow-dots");


function showPhoto(index) {
    slideshowImage.src = photos[index];
    slideshowCaption.textContent = captions[index];

    updateDots();
}


function nextPhoto() {
    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    showPhoto(currentPhoto);
}


function previousPhoto() {
    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    showPhoto(currentPhoto);
}


function updateDots() {
    dotsContainer.innerHTML = "";

    photos.forEach((photo, index) => {
        const dot = document.createElement("button");

        dot.classList.add("dot");
        dot.setAttribute("aria-label", `Go to photo ${index + 1}`);

        if (index === currentPhoto) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            currentPhoto = index;
            showPhoto(currentPhoto);
        });

        dotsContainer.appendChild(dot);
    });
}


nextButton.addEventListener("click", nextPhoto);
previousButton.addEventListener("click", previousPhoto);

showPhoto(currentPhoto);