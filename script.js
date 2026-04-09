document.addEventListener("DOMContentLoaded", () => {
    const diceItems = document.querySelectorAll('.dice-item');
    const displayImg = document.getElementById('dice-active-img');

    diceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Remove active from all and add to current
            diceItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            // Image Swap with transition
            const newSrc = this.getAttribute('data-img');
            
            displayImg.style.opacity = '0'; // Halka sa fade out

            setTimeout(() => {
                displayImg.src = newSrc;
                displayImg.onload = () => {
                    displayImg.style.opacity = '1'; // Nayi image fade in
                };
            }, 150);
        });
    });
});

// bounding for section content
function firstpageamin() {
    var tl = gsap.timeline();

    tl.to(".boundingelem", {
      y: 0,
        ease: "power3",
        duration: 2.5,
        stagger: .9,
        wordSpacing: "8px", 
        letterSpacing: "1px"
    });

}

firstpageamin();


// murquee section

gsap.set(".video-card", { opacity: 0, y: 100 }); // Shuru mein sab ko chhupa do

ScrollTrigger.batch(".video-card", {
  onEnter: batch => gsap.to(batch, {
    opacity: 1, 
    y: 0, 
    stagger: 0.15, 
    overwrite: true,
    ease: "power4.out",
    duration: 1.2
  }),
  onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
  start: "top 90%", 
});

