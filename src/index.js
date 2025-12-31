

const bgimg = document.querySelector('#backgroundImg');

const animStart = 0;
const animend = window.innerHeight;

function handleScroll() {
    // Get the current vertical scroll position
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Calculate how far we are into the fade range (0 to 1)
    let opacity = 1 - (scrollTop - animStart) / (animend - animStart);
    
    // Clamp the opacity value between 0 and 1
    if (opacity < 0) {
        opacity = 0;
    } else if (opacity > 1) {
        opacity = 1;
    }

    // Apply the calculated opacity to the element
    bgimg.style.opacity = opacity;
}

window.addEventListener('scroll', handleScroll)

handleScroll()