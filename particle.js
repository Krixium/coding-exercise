let gravity = {
  x: 0,
  y: 0.05
}

class Particle {
  constructor(xPos, yPos) {
    // attributes
    this.acceleration = createVector(gravity.x, gravity.y);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = createVector(xPos, yPos);
    this.lifespan = 255;
    this.strokeColor = {
      r: 200,
      g: 200,
      b: 200
    }
    this.fillColor = {
      r: 200,
      g: 200,
      b: 200
    }
    this.size = {
      x: 12,
      y: 12
    }
  }

  // functions
  isExpired() {
    return this.lifespan < 0;
  }

  draw() {
    stroke(this.strokeColor.r, this.strokeColor.g, this.strokeColor.b, this.lifespan);
    strokeWeight(2);
    fill(this.fillColor.r, this.fillColor.g, this.fillColor.b, this.lifespan);
    ellipse(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  tick() {
    this.update();
    this.draw();
  }
}