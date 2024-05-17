let intro = document.querySelector('.intro');
let logo = document.querySelector('.intro-header');
let logoSpan = document.querySelectorAll('.text');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
                })
            },2000)
            
            setTimeout(()=>{
                intro.style.top= '-100vh';
            }, 2300)
        })
        
    })

    

document.querySelector("#rijksmuseum-app > footer > div > div.buttons-section > div.social-logos")


document.addEventListener('DOMContentLoaded', function () {

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    // navigationTooltips: ['Home','Contents','Digital Museum','More Information'],
    scrollingSpeed: 800,  // Set a general scrolling speed
    scrollOverflow: false,
   
    afterLoad: function (origin, destination, direction) {
    // Resume audio playback when a section comes into view
    const audio = document.getElementById('audio');
    audio.play();
},
});
const audio = document.getElementById('audio');
const muteButton = document.getElementById('muteButton');

// Function to toggle mute/unmute
function toggleMute() {
audio.muted = !audio.muted;
muteButton.textContent = audio.muted ? '🔊' : '🔇';
}

// Event listener for the mute button
muteButton.addEventListener('click', toggleMute);
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const leftButton = document.getElementById('leftButton');
    const rightButton = document.getElementById('rightButton');

    let currentIndex = 0;

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            carousel.style.transform = `translateX(-${currentIndex * 320}px)`;
        }
    });

    rightButton.addEventListener('click', () => {
        if (currentIndex < carousel.children.length - 1) {
            currentIndex++;
            carousel.style.transform = `translateX(-${currentIndex * 320}px)`;
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.item-container').forEach(item => {
      item.addEventListener('click', () => {
        const descriptionId = item.getAttribute('data-description');
        const imageSrc = item.getAttribute('data-image');
        document.getElementById('modal-image').src = imageSrc;
        document.getElementById('modal-description').innerHTML = document.getElementById(descriptionId).innerHTML;
        document.getElementById('description-modal').style.display = 'block';
      });
    });
  });

  function closeModal() {
    document.getElementById('description-modal').style.display = 'none';
  }  
  
// Museum explore
  function openExplorer() {
    document.getElementById('explorer-modal').style.display = 'flex';
}

function closeExplorer() {
    document.getElementById('explorer-modal').style.display = 'none';
}

// Arkgnigths gallery
document.addEventListener('DOMContentLoaded', () => {
    const galleryLinks = document.querySelectorAll('.gallery-link');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalTags = document.getElementById('modalTags');
    const closeModal = document.getElementById('closeModal');

    galleryLinks.forEach(link => {
        link.addEventListener('click', () => {
            const imgSrc = link.querySelector('img').src; // Get the source of the clicked thumbnail
            const title = link.querySelector('img').alt; // Get the alt text of the clicked thumbnail
            const tags = link.querySelector('img').getAttribute('alt').split(','); // Get the alt attribute and split it into tags

            modalImg.src = imgSrc;
            modalTitle.innerHTML = title;
            modalTags.innerHTML = tags.map(tag => `<span class="gallery-tag">${tag}</span>`).join('');

            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
});
