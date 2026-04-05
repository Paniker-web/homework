document.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('[data-hero-product]');
  if (!section) return;

  // ========== ДАННЫЕ СЛАЙДОВ (чистый массив) ==========
  var slides = [
    {
      protein: '24G',
      bcaa: '5.5G',
      image: './images/Protein.png',
      imageWebp: './images/Protein.webp',
      alt: 'Whey Protein jar'
    },
    {
      protein: '30G',
      bcaa: '7G',
      image: './images/Protein2.png',
      imageWebp: './images/Protein2.webp',
      alt: 'Whey Protein jar — formula 2'
    },
    {
      protein: '26G',
      bcaa: '6G',
      image: './images/Protein3.png',
      imageWebp: './images/Protein3.webp',
      alt: 'Whey Protein jar — formula 3'
    }
  ];

  // ========== DOM ЭЛЕМЕНТЫ ==========
  var statsCard  = section.querySelector('[data-stats-card]');
  var proteinVal = section.querySelector('[data-stat-protein]');
  var bcaaVal    = section.querySelector('[data-stat-bcaa]');
  var jarImg     = section.querySelector('[data-jar-static]');
  var picture    = jarImg ? jarImg.closest('picture') : null;
  var jarSource  = picture ? picture.querySelector('source') : null;
  var dots       = section.querySelectorAll('[data-hero-dot]');

  var current    = 0;
  var switching  = false;
  var FADE_TIME  = 400;

  // ========== ПОДСТАВИТЬ ДАННЫЕ ==========
  function applySlide(index) {
    var slide = slides[index];
    if (!slide) return;

    proteinVal.textContent = slide.protein;
    bcaaVal.textContent    = slide.bcaa;

    if (jarSource) {
      jarSource.srcset = slide.imageWebp;
    }
    if (jarImg) {
      jarImg.src = slide.image;
      jarImg.alt = slide.alt;
    }
  }

  // ========== ОБНОВИТЬ ТОЧКИ ==========
  function updateDots(index) {
    for (var i = 0; i < dots.length; i++) {
      if (i === index) {
        dots[i].classList.add('is-active');
        dots[i].setAttribute('aria-current', 'true');
      } else {
        dots[i].classList.remove('is-active');
        dots[i].removeAttribute('aria-current');
      }
    }
  }

  // ========== ПЕРЕКЛЮЧИТЬ СЛАЙД ==========
  function goTo(index) {
    if (index === current || switching) return;
    switching = true;

    // Фейд-аут статистики
    statsCard.classList.add('is-switching');
    statsCard.classList.remove('is-visible');

    // Фейд-аут банки
    jarImg.classList.add('is-fading');

    // Обновляем точки сразу
    updateDots(index);

    // После завершения анимации — меняем контент и фейд-ин
    setTimeout(function () {
      applySlide(index);

      jarImg.classList.remove('is-fading');
      statsCard.classList.remove('is-switching');
      statsCard.classList.add('is-visible');

      current  = index;
      switching = false;
    }, FADE_TIME);
  }

  // ========== КЛИК ПО ТОЧКАМ ==========
  for (var i = 0; i < dots.length; i++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.getAttribute('data-hero-dot'), 10);
        goTo(idx);
      });
    })(dots[i]);
  }

  // ========== АВТОПЛЕЙ ==========
  var autoplayDelay = 5000;
  var autoplayTimer = setInterval(function () {
    var next = (current + 1) % slides.length;
    goTo(next);
  }, autoplayDelay);

  // Пауза при наведении
  section.addEventListener('mouseenter', function () {
    clearInterval(autoplayTimer);
  });

  section.addEventListener('mouseleave', function () {
    autoplayTimer = setInterval(function () {
      var next = (current + 1) % slides.length;
      goTo(next);
    }, autoplayDelay);
  });

  // ========== КЛАВИАТУРА ==========
  section.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      goTo((current + 1) % slides.length);
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo((current - 1 + slides.length) % slides.length);
    }
  });

  // ========== НАЧАЛЬНОЕ СОСТОЯНИЕ ==========
  applySlide(0);
  updateDots(0);
});