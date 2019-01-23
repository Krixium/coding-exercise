class Particle {
  constructor(xPos, yPos) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = createVector(xPos, yPos);
    this.lifespan = 255;
  }

  isExpired() {
    return this.lifespan < 0;
  }
}

function drawParticle(p) {
  stroke(200, p.lifespan);
  strokeWeight(2);
  fill(126, p.lifespan);
  ellipse(p.position.x, p.position.y, 12, 12);
}

function updateParticle(p) {
    p.velocity.add(p.acceleration);
    p.position.add(p.velocity);
    p.lifespan -= 2;
}

function tickParticle(p) {
  updateParticle(p);
  drawParticle(p);
}