const slides = document.querySelectorAll('.wp-block-np-block-page-slideshow-block');

for (let i = 0; i < slides.length; i++) {
    slides[i].onclick = function (event) {
        if (event.target.closest('.wp-block-np-block-page-slideshow-next') && i+1 < slides.length) {
            slides[i+1].scrollIntoView({behavior: 'smooth'});
        } else if (event.target.closest('.wp-block-np-block-page-slideshow-prev') && i-1 >= 0) {
            slides[i-1].scrollIntoView({behavior: 'smooth'});
        } else {
            return
        };
    };
};

