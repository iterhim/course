let photos = document.querySelectorAll(".imageToShow");
let slider = [];
for (let i = 0; i < photos.length; i++) {
    slider[i] = photos[i].src;
    photos[i].remove();
}

let step = 0, offset = 0;


function draw() {
    let img = document.createElement('img');
    img.src = slider [step];
    img.classList.add('slideSingle');
    img.style.left = offset * 512 + 'px';
    document.querySelector('#slide').appendChild(img);

    if (step + 1 === slider.length) {
        step = 0;
    } else {
        step++
    }
    offset = 1;

}

function left() {
    document.onclick = null;
    let slides2 = document.querySelectorAll('.slideSingle'),
        offset2 = 0;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2 * 512 - 512 + 'px';
        offset2++;
    }
    let stitiop = document.querySelectorAll("button");

    // stop[0].onclick = function (){
    function lete() {
        slides2[0].remove();
        // console.log(slides2[0])
        draw();
        left();
    }

    let sliderTimer = setTimeout(lete, 1000);

    stitiop[0].addEventListener('click', function() {
        clearTimeout(sliderTimer);
    });
    stitiop[1].addEventListener('click', function() {
        let sliderTimer = setTimeout(lete, 1000);
    });

}

draw();
left();
