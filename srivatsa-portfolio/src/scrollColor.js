// Function to interpolate between colors
function interpolateColor(color1, color2, factor) {
    const result = color1.match(/\w\w/g).map((c, i) => {
        const c1 = parseInt(c, 16);
        const c2 = parseInt(color2.match(/\w\w/g)[i], 16);
        const value = Math.round(c1 + factor * (c2 - c1));
        return value.toString(16).padStart(2, '0');
    });
    return `#${result.join('')}`;
}

// Function to handle scroll-based color changes
function updateScrollColor() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = scrollPosition / (documentHeight - windowHeight);

    // Define our color stops
    const colors = {
        start: '#000000',    // Black
        middle: '#8B4513',   // Brown (SaddleBrown)
        end: '#D2B48C'       // Tan
    };

    let currentColor;
    if (scrollPercentage < 0.5) {
        // Transition from black to deep pink
        const factor = scrollPercentage * 2; // Scale to 0-1 range
        currentColor = interpolateColor(colors.start, colors.middle, factor);
    } else {
        // Transition from deep pink to neon green
        const factor = (scrollPercentage - 0.5) * 2; // Scale to 0-1 range
        currentColor = interpolateColor(colors.middle, colors.end, factor);
    }

    // Update the CSS variable
    document.documentElement.style.setProperty('--scroll-color', currentColor);
}

// Add scroll event listener
window.addEventListener('scroll', updateScrollColor);

// Initial call to set the color
updateScrollColor(); 