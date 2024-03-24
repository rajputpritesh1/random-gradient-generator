// Import the chroma-js library
const chroma = require('chroma-js');

// Function to generate a random linear gradient
function generateRandomGradient(numStops) {
    // Generate random start and end colors
    const startColor = chroma.random().hex();
    const endColor = chroma.random().hex();

    // Generate a range of colors between the start and end colors
    const colors = chroma.scale([startColor, endColor]).colors(numStops);

    // Create an array to store gradient stops
    const gradientStops = [];

    // Calculate random stop positions based on the number of colors
    for (let i = 0; i < numStops; i++) {
        const stopColor = colors[i];
        const stopPosition = Math.random();
        gradientStops.push(`${stopColor} ${stopPosition * 100}%`);
    }

    // Combine gradient stops into a CSS linear gradient string
    const linearGradient = `linear-gradient(to right, ${gradientStops.join(', ')})`;

    return linearGradient;
}

// Example usage
const numStops = 5; // Number of gradient stops
const gradient1 = generateRandomGradient(numStops);
const gradient2 = generateRandomGradient(numStops);

console.log('Generated Random Gradient 1:', gradient1);
console.log('Generated Random Gradient 2:', gradient2);
