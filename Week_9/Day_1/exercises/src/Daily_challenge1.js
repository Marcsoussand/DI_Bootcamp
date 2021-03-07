import React from 'react';
import countries from './Countries';

class Daily_challenge1 extends React.Component {
    constructor() {
        super();
        this.state = {
            country_list: [],
            letters: ''

        }


    }

    handleChange = (event) => {
        var val = event.target.value
        console.log(val);
        // var country_list=[];
        if (val.length > 0) {
            const regex = new RegExp(`^${val}`, 'i');
            var country_temp = countries.filter(x => regex.test(x));
            this.setState({ country_list: country_temp, letters: val })
            console.log(this.state);

        }
    }

    printCountries = () => {
        const { country_list, letters } = this.state;
        if (letters.length > 0) {
            console.log(country_list);
            return (
                <div>{country_list.map((item, index) => (
                    <p key={index} onClick={() =>this.printOne(item)}>{item}</p>
                ))}
                </div>
            )

        }

    }

    printOne = (value) => {
        this.setState(()=> ({country_list:[],letters:value}))

    }


    render() {
        const { country_list, letters } = this.state;
        return (
            <form>
                <h1>Auto Complete</h1>
                <br />
                <input type='text' onChange={this.handleChange} value={letters} />
                <br />
                {this.printCountries()}
                <p>Suggestions: {country_list.length}</p>

            </form>
        )
    }
}

export default Daily_challenge1