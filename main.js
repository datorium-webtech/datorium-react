ReactDOM.render(
    [
        e(Image, {desc: "Mountain climbing", imageSrc: "resources/images/mountain.jpg"}),
        e(Image, {desc: "Local wildlife", imageSrc: "resources/images/forest.jpg"}),
        e(Image, {desc: "Africa", imageSrc: "resources/images/savanna.jpg"}),
        e(Image, {desc: "No water", imageSrc: "resources/images/desert.jpg"}),
        e(Image, {desc: "A lot of water", imageSrc: "resources/images/underwater.jpg"}),
        e(Note, {title: "First note", text: "This is the content of this note."})
    ],
    document.querySelector(".image-container")
);
