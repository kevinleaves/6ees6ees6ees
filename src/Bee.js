class Bee extends Grub {

  //in es6, methods belong inside the constructor function
  constructor() {
    //a call to super, along with the extends keyord seem necessary to form the inhertitance connection
    super()
    this.age = 5;
    this.color = 'yellow'
    this.job = 'Keep on growing'
  }
};
