// will render temperature and place -- e.g. "It's 54 in Philadelphia"
// static is okay
var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className='text-center'>It is currently {temp} in {location}</h3>
    
  );
};

module.exports = WeatherMessage;
