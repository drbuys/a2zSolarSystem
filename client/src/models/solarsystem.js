var _ = require('lodash');

var SolarSystem = function(params){
    this.name = params.name;
    this.sun = params.sun;
    this.planets = params.planets;
};

SolarSystem.prototype = {
    addPlanet: function(planet) {
        this.planets.push(planet);
    },
    travelTime: function(planet1, planet2, mode) {
        var timeTo = 0;
        // velocity is in metres per second
        var velocity = 0;
        var distance = 0;

        if (planet1.distanceFromSun > planet2.distanceFromSun) {
            distance = (planet1.distanceFromSun - planet2.distanceFromSun);
        } else if (planet2.distanceFromSun > planet1.distanceFromSun) {
            distance = (planet2.distanceFromSun - planet1.distanceFromSun);
        } else {
            distance = 0;
        }

        switch(mode) {
            case 'bike':
                velocity = (40/3600);
                break;
            // car travelling at 60mph
            case 'car':
                velocity = (95.5606/3600);
                break;
            case 'starshipEnterprise':
                velocity = 300000000;
                break;
            case 'voyagerSpaceProbe':
                velocity = (62140/3600);
                break;
        }

        timeTo = (distance/velocity);
    },
    findPlanetByName:function(planetName){
      return _.find(this.planets, function(planet){
        return planet.name === planetName;
    });
    },
    // returns planets dependant on type (Rocky or Gas Giants)
    filteredPlanets: function(type){
      if(!type) return this.planets;
      return _.filter(this.planets, function(planet){
        return planet.type === type;
    });
    },
    // based on planets, takes in a 'thing' as a parameter (diameter, mass, distanceFromSun, distanceFromEarth)
    greatest: function(thing) {

    },
    // order planets by a 'thing', and 'order' is either Asc or Desc
    orderBy: function(thing, order) {

    }
};

module.exports = SolarSystem;
