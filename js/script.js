$('.carousel-1').flickity({
  pageDots: false,
  prevNextButtons: false,
  autoPlay: 3792,
  pauseAutoPlayOnHover: false
});

$('.carousel-2').flickity({
  pageDots: false,
  cellAlign: 'left',
  wrapAround: true,
  arrowShape: {
    x0: 10,
    x1: 40, y1: 30,
    x2: 50, y2: 20,
    x3: 30
  }
});
