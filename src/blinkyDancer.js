var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

  this.oldStep();
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.oldStep = Dancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();  
};



//// SMILEY DANCER ////
var makeBlueDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

  //this.oldStep();
  Dancer.prototype.step.call(this);


  this.$node.addClass('blueDancer');
  this.$node.append('<img src="./gifs/tenor.gif" />');
};
makeBlueDancer.prototype = Object.create(Dancer.prototype);
makeBlueDancer.prototype.constructor = makeBlueDancer;

// makeBlueDancer.prototype.oldStep = Dancer.prototype.step;
// ^ We don't want to run this style because when we mask,
// we are trying to restrict access to the old method.
// the better way would be to directly invoke it like in
// line 46.

makeBlueDancer.prototype.step = function() {
  console.log('makeBlueDancer Step = ', this);
  // this.oldStep();

  // We use .call because we want to immediately invoke it
  Dancer.prototype.step.call(this);

  this.$node.slideToggle();
};



//// MONKEY DANCER ////
var makeMonkeyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  
  this.oldStep();

  this.$node.addClass('monkeyDancer');
  this.$node.append('<img src="./gifs/monkey.gif" />');
};
makeMonkeyDancer.prototype = Object.create(Dancer.prototype);
makeMonkeyDancer.prototype.constructor = makeMonkeyDancer;

makeMonkeyDancer.prototype.oldStep = Dancer.prototype.step;
makeMonkeyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
  


};
