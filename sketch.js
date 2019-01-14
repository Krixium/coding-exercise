// Canvas settings
const canvas = {
  width: 800,
  height: 600,
  backgroundColor: 0
};

// array of particles
let particles = [];

// setup function
// creates the canvas and an initial list of particles
function setup() {
  createCanvas(canvas.width, canvas.height);
  background(canvas.backgroundColor);

  // Loop 100 times
  for (let i = 0; i < 10; i++) {
    // Push a new particle to the end of the array
    particles.push(new Particle(canvas.width * 0.5, canvas.height * 0.2));
  }
}

function draw() {
  // Push a new particle to the end of the array
  particles.push(new Particle(canvas.width * 0.5, canvas.height * 0.2));

  // Draw the background
  background(canvas.backgroundColor);

  // Loop through all the particles
  for (let i = 0; i < particles.length; i++) {
    // Increment the particle forward one step in time
    particles[i].tick();

    // If the particle is expired, remove it
    if (particles[i].isExpired()) {
      particles.splice(i, 1);
    }
  }
}