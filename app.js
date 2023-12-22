const slider =document.quertySelector('.slider');
const prevButton = document.quertySelector ('.prev-button');
const nextButton = document.quertySelector ('.next-button');
const slides = Array.from(slider.quertySelectorAll('img'));
const slideCount = slideslength;
let slideIndex = 0


prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }
  
  
  // Функция для показа следующего слайда
  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }
function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }
function openFullscreenImage(element) {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');
  
  
    fullscreenImage.src = element.src;
    fullscreenContainer.style.display = 'block';
}
  
  
function closeFullscreenImage() {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    fullscreenContainer.style.display = 'none';
}
// Когда пользователь прокручивает страницу вниз 20px от верха, показать кнопку
window.onscroll = function() {
  scrollFunction();
};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('scrollToTopButton').style.display = 'block';
  } else {
      document.getElementById('scrollToTopButton').style.display = 'none';
    }
  }
  
  
// Плавный скроллинг при клике на кнопку "Наверх"
document.getElementById('scrollToTopButton').addEventListener('click', function() {
  scrollToTop();
});
  






function scrollToTop() {
    const scrollStep = -window.scrollY / 15;
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}

  
  
