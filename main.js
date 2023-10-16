document.addEventListener('DOMContentLoaded', function () {
    console.log('Pagina caricata'); // Aggiungi questa riga
    const myCarouselElement = document.getElementById('myCarousel');
    new bootstrap.Carousel(myCarouselElement, {
      interval: 2000,
      touch: false
    });
  
    myCarouselElement.addEventListener('slide.bs.carousel', (event) => {
      console.log('Carousel in transizione da', event.from, 'a', event.to);
    });
  });