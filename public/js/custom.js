
// Sidenav bar script 
function openNav() {
  document.getElementById("mySidenav").style.width = "375px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// add a class in header on scroll 

window.addEventListener('scroll', function() {
    var header = document.getElementById('myHeader');

    if (window.scrollY > 200) { 
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
});

// upload file 
document.addEventListener('DOMContentLoaded', function() {
  const fileInput = document.getElementById('file-input');
  const fileText = document.querySelector('.file-text');
  const clearButton = document.getElementById('clear-button');

  fileInput.addEventListener('change', function() {
      const selectedFile = fileInput.files[0];
      if (selectedFile) {
          fileText.textContent = selectedFile.name;
          clearButton.style.display = 'inline-block';
      } else {
          fileText.textContent = 'Choose a file';
          clearButton.style.display = 'none';
      }
  });

  clearButton.addEventListener('click', function() {
      fileInput.value = null;
      fileText.textContent = 'Choose a file';
      clearButton.style.display = 'none';
  });
});



// workplace slider 

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const progressBar = document.querySelector('.progress-bar');
    const slideNumber = document.querySelector('.slide-number');
    let currentIndex = 0;
    const slideCount = slider.querySelectorAll('.slide').length;

    function updateSlideNumber() {
        slideNumber.textContent = `${currentIndex + 1}/${slideCount}`;
    }

    function updateProgressBar() {
        const percent = (currentIndex / (slideCount - 1)) * 100;
        progressBar.style.width = `${percent}%`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlideNumber();
        updateProgressBar();
        updateSliderPosition();
    }

    function updateSliderPosition() {
        const translateX = -currentIndex * 100;
        slider.style.transform = `translateX(${translateX}%)`;
    }

    setInterval(nextSlide, 3000);

    updateSlideNumber();
    updateProgressBar();
});


// animation start 
AOS.init();

AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 
  
  offset: 120, 
  delay: 0, 
  duration: 400, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});


// talent slider 
// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll(".talents-slider-wrapper .slide");
//     const dotsContainer = document.querySelector(".dots");

//     let currentIndex = 0;

//     function showSlide(index) {
//         slides[currentIndex].style.opacity = 0;
//         currentIndex = (index + slides.length) % slides.length;
//         slides[currentIndex].style.opacity = 1;
//         updateDots();
//     }

//     function createDots() {
//         slides.forEach((_, index) => {
//             const dot = document.createElement("span");
//             dot.className = "dot";
//             dot.addEventListener("click", () => showSlide(index));
//             dotsContainer.appendChild(dot);
//         });
//     }

//     function updateDots() {
//         const dots = document.querySelectorAll(".dot");
//         dots.forEach((dot, index) => {
//             if (index === currentIndex) {
//                 dot.classList.add("active");
//             } else {
//                 dot.classList.remove("active");
//             }
//         });
//     }

//     showSlide(currentIndex);
//     createDots();
//     setInterval(() => showSlide(currentIndex + 1), 5000);
// });





document.addEventListener("DOMContentLoaded", function () {
    // Define a function to create a slider
    function createSlider(sliderWrapper) {
        const slides = sliderWrapper.querySelectorAll(".talents-slider-wrapper .slide");
        const dotsContainer = sliderWrapper.querySelector(".dots");

        let currentIndex = 0;

        function showSlide(index) {
            slides[currentIndex].style.opacity = 0;
            currentIndex = (index + slides.length) % slides.length;
            slides[currentIndex].style.opacity = 1;
            updateDots();
        }

        function createDots() {
            slides.forEach((_, index) => {
                const dot = document.createElement("span");
                dot.className = "dot";
                dot.addEventListener("click", () => showSlide(index));
                dotsContainer.appendChild(dot);
            });
        }

        function updateDots() {
            const dots = dotsContainer.querySelectorAll(".dot");
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });
        }

        showSlide(currentIndex);
        createDots();
        setInterval(() => showSlide(currentIndex + 1), 5000);
    }

    // Get all slider wrappers and create sliders for each
    const sliderWrappers = document.querySelectorAll(".talents-slider-wrapper");
    sliderWrappers.forEach((sliderWrapper) => {
        createSlider(sliderWrapper);
    });
});
