import { weatherDesc } from "./reducers"

export const PROP_TWO = 'PROP_TWO'

export const changePropTwo = (value) => {
    return {
        type: PROP_TWO,
        payload: value,
    }
}

export const changePropTwoFromChild = (value) => {
    return {
        type: 'PROP_TWO_FROM_CHILD',
        payload:value
    }
}

export const getWeather = (value) => {
    return {
        type:'WEATHER',
        payload:value
    }
}

export const getAsyncWeather = () => {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Tel%20Aviv%2Cil&lat=0&lon=0&id=2172797&units=imperial&mode=xml%2C%20html", {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-key": "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c",
    		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    	}
    })
    .then(res=>res.json())
    .then(data=> {
        return{
            type:'WEATHER',
            payload:data
        }
   
    })
    .catch(e=> {
      console.log(e);
    })
}