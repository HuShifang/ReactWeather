// will render temperature and place -- e.g. "It's 54 in Philadelphia"
// static is okay
var React = require('react');

var WeatherMessage = (props) => {
  return (
    <div>
      <h3 className='text-center'>It is currently {props.temp} in {props.location}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
