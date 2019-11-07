function how() {
    document.getElementById("new").innerHTML = "Here we go";
}

function Gavin() {
    show_image("Gavin.jpg", 145,250, "Gavin");
}

function show_image (src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}