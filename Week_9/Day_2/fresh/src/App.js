import React from 'react';
import './App.css';
import Child from './Child';
import { connect } from 'react-redux';
import { changePropTwo, getWeather, getAsyncWeather } from './actions';


class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     property_one: 'text 1',
  //     property_two: '',
  //     desc:''
  //   }
  // }

  // handleChange = (event) => {
  //   this.setState({property_two:event.target.value});
  // }


  componentDidMount(){
    // fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Tel%20Aviv%2Cil&lat=0&lon=0&id=2172797&units=imperial&mode=xml%2C%20html", {
    // 	"method": "GET",
    // 	"headers": {
    // 		"x-rapidapi-key": "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c",
    // 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    // 	}
    // })
    // .then(res=>res.json())
    // .then(data=> {
    //   // this.setStapr({desc:data.weather[0].description});
    //   this.props.getTelAvivWeather(data.weather[0].description)
    // })
    // .catch(e=> {
    //   console.log(e);
    // })

    this.props.getAsyncWtr()
  }


  render() {
    const { property_one, property_two,handleChange } = this.props;
    return (
      <>
        <div>
          <h1>Parent Component</h1>
          <p>Here is property_two: {property_two}</p>
      Change property_two:<br />
          <input type='text' onChange={handleChange} />
        </div>
        <div>
          <h1>Child Component</h1>
          <Child />
        </div>
        <div>
          <h1>Tel Aviv Weather</h1>
          {this.props.desc}
        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    property_one: state.reducer_one.property_one,
    property_two: state.reducer_two.property_two,
    desc:state.weatherDesc.desc
  }
}
const mapDispatchToProps = (dispatch) => {
 return {
   handleChange:(event) => dispatch(changePropTwo(event.target.value)),
   getTelAvivWeather : (param) =>dispatch(getWeather(param)),
   getAsyncWtr : (param)=>dispatch(getAsyncWeather(param))
   }
 }



export default connect(mapStateToProps, mapDispatchToProps)(App);
