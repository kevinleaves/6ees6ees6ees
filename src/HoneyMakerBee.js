class HoneyMakerBee extends Bee {
  constructor () {
    //you can pass in arguments into super parameters
    super()
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  // HoneyMakerBee specific methods go here
  makeHoney () {
    this.honeyPot++
  }
  giveHoney () {
    this.honeyPot--
  }
};
