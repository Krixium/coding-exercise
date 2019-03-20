const canvasWidth = 800
const canvasHeight = 600
const centerX = canvasWidth * 0.5
const centerY = canvasHeight * 0.5
const black = 0

// array of particles
let particles = []

// setup function
// creates the canvas and an initial list of particles
function setup() {
  createCanvas(canvasWidth, canvasHeight)
  background(black)

  // Repeat the following sets 10 times
  //  - Create a new partile in the center of the screen
  //  - Add it to the list
  for (let i = 0; i < 10; i = i + 1) {
    let newParticle = new Particle(centerX, centerY)
    particles.push(newParticle)
  }
}

function draw() {
  // 1. Add a new particle to the end of the list
  let newParticle = new Particle(centerX, centerY)
  particles.push(newParticle)

  // Draw the background
  background(black)

  // Reference
  //  Particle.tick() - Updates the position of the particle and draws it on the screen
  //  Particle.isExpired() - Checks if the particle has reached the end of its lifetime, true if particle expired, false otherwise

  // Perform a set of actions for each particle in the list of particles
  for (let i = 0; i < particles.length; i = i + 1) {
    let particle = particles[i];

    // 2. Move the particle forward one step in time
    particle.tick()

    // 3. If the particle is expired, remove it
    if (particle.isExpired()) {
      particles.splice(i, 1)
    }
  }
}