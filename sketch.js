// array of particles
let particles = [];

// setup function
// creates the canvas and an initial list of particles
function setup() {
  createCanvas(800, 600);
  background(0);

  // Loop 100 times
  for (let i = 0; i < 10; i++) {
    // Push a new particle to the end of the array
    particles.push(new Particle(800 * 0.5, 600 * 0.2));
  }
}

function draw() {
  // Push a new particle to the end of the array
  particles.push(new Particle(800 * 0.5, 600 * 0.2));

  // Draw the background
  background(0);

  // Loop through all the particles
  for (let i = 0; i < particles.length; i++) {
    // Increment the particle forward one step in time
    currentParticle = particles[i];
    tickParticle(currentParticle);

    // If the particle is expired, remove it
    if (currentParticle.isExpired()) {
      particles.splice(i, 1);
    }
  }
}

// change it back to object oriented
// explain function vs attributes