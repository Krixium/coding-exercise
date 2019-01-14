class Particle {
  constructor(xPos, yPos) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = createVector(xPos, yPos);
    this.lifespan = 255;
  }

  tick() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  display() {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(126, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  isExpired() {
    return this.lifespan < 0;
  }
}