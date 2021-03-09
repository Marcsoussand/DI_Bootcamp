import React from 'react';

class Forms extends React.Component {
    constructor() {
        super();
        this.state = {
            first: '',
            last: '',
            text: '',
            optionvalue: '',
            isgoing:''
        }


    }

    handleChange = (event) => {
        console.log(event.target.value);
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({ [event.target.name]: value })
    }

    handleSubmit = (event) => {
        const {first,last,text,optionvalue,isgoing} = this.state;
        alert('do submit');
        event.preventDefault();
        console.log(first,last,text,optionvalue,isgoing);
    }

    render() {
        const { first, last, text, optionvalue,isgoing } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                First Name<input type='text' name='first' onChange={this.handleChange} />
                <p>{first}</p> <br />
                   Last Name: <input type='text' name='last' onChange={this.handleChange} />
                <p>{last}</p>
                <textarea name='text' onChange={this.handleChange} />
                <p>{text}</p>
                <select name='optionvalue' onChange={this.handleChange}>
                    <option value='one'>One</option>
                    <option value='two'>Two</option>
                    <option value='three'>Three</option>
                </select>
                <p>{optionvalue}</p>
                <br />

Is Going : 
<input type='checkbox' name='isgoing' onChange={this.handleChange}/>
<p>{isgoing.toString()}</p>
                <input type='submit' value="submit" />
            </form>
        )
    }
}

export default Forms