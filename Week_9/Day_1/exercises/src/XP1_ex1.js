import React from 'react';

class XP1_ex1 extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            genre: '',
            year: '',

        }


    }

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        const { title, author, genre, year } = this.state;
        event.preventDefault();
        const obj = { title, author, genre, year }
        console.log(obj);
    }

    render() {
        // const { title, author, genre, year } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>New Book</h1>
                Title<input type='text' name='title' onChange={this.handleChange} />
                <br/>
                Author: <input type='text' name='author' onChange={this.handleChange} />
                <br/>
                Genre: <input type='text' name='genre' onChange={this.handleChange} />
                <br/>
                Year Published: <input type='text' name='year' onChange={this.handleChange} />
                <br/>
                <input type='submit' value="submit" />
            </form>
        )
    }
}

export default XP1_ex1