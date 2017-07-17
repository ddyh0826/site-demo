function Ball(x, y, r, color){
  this.ball = null;
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
  return this;
}

Ball.prototype.init = function (){
  this.ball = document.createElement('div');
  this.draw(this.ball);
  document.body.appendChild(this.ball);
  return this;
};

Ball.prototype.draw = function (ball){
  ball.style.position = 'absolute';
  ball.style.borderRadius = '50%';
  ball.style.backgroundColor = this.color;
  ball.style.width = ball.style.height = this.r * 2 + 'px';
  ball.style.left = this.x + 'px';
  ball.style.top = this.y + 'px';
  return this;
};

