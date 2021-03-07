import React from 'react';

class XP1_ex2 extends React.Component {
    constructor() {
        super();
        this.state = {
            first: '',
            last: '',
            phone: '',
            email: '',
            page:'form'

        }


    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({page:'data'});
       
    }

    reset = () =>{
        this.setState({first: '',last: '',phone: '',email: '',page:'form'})
        
    }

    render() {
        const { first,last,phone,email,page } = this.state;
        switch (page) {
            case 'home':
                return(<form onSubmit={this.handleSubmit} style={{backgroundColor:'grey'}}>
                <h1>Welcome</h1>
                <h4>Please provide your information below</h4>
                First Name:<input type='text' name='first' onChange={this.handleChange} />
                <br/>
                Last Name: <input type='text' name='last' onChange={this.handleChange} />
                <br/>
                Phone Number: <input type='text' name='phone' onChange={this.handleChange} />
                <br/>
                Email Address: <input type='text' name='email' onChange={this.handleChange} />
                <br/>
                <input type='submit' value="submit" />
            </form>)
                
                break;
        case 'data':
            return (

                <>
                <div style={{backgroundColor:'grey'}}>
                <h1>Welcome</h1>
                <p>{first} {last}</p>
                <p>{phone}|{email}</p>
                <button onClick={this.reset}>Reset</button>
                </div>
                </>
            )
            default:
                break;
        }
        return (
            <form onSubmit={this.handleSubmit} style={{backgroundColor:'grey'}}>
                <h1>Welcome</h1>
                <h4>Please provide your information below</h4>
                First Name:<input type='text' name='first' onChange={this.handleChange} />
                <br/>
                Last Name: <input type='text' name='last' onChange={this.handleChange} />
                <br/>
                Phone Number: <input type='text' name='phone' onChange={this.handleChange} />
                <br/>
                Email Address: <input type='text' name='email' onChange={this.handleChange} />
                <br/>
                <input type='submit' value="submit" />
            </form>
        )
    }
}

export default XP1_ex2