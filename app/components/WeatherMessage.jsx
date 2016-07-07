// will render temperature and place -- e.g. "It's 54 in Philadelphia"
// static is okay
var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {location, temp} = this.props;
//
//     return (
//       <div>
//         <h1>It is currently {temp} in {location}</h1>
//       </div>
//     );
//   }
// });

var WeatherMessage = (props) => {
  return (
    <div>
      <h1>It is currently {props.temp} in {props.location}</h1>
    </div>
  );
};

module.exports = WeatherMessage;
