var React = require('react');
var {Link} = require('react-router');

var About = function (props) {
  return (
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>Welcome to the About page.</p>
      <p>This app uses weather information from <a href='http://openweathermap.org/'>OpenWeatherMap</a>.
      </p>

      <p>
        Implementation by <a href="mailto:stephen.p.ford@gmail.com">Stephen Ford</a>
      </p>


    </div>

  );
};


module.exports = About;
