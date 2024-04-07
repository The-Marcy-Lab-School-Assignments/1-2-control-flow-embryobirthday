const wildlyBiasedReview = (location) => {

  if (!location || location != 'NYC'){
    console.log('Yea that place is cool I guess');
    return;
  }
  //guard clause makes sure that there's a location to pass through, and in this case, makes sure that the 
  // location is "NYC".

  if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
  } else {
    console.log('Yea that place is cool I guess');
  }
};

module.exports = {
  wildlyBiasedReview,
};

