import React from 'react';


class Books extends React.Component {
constructor () {
    super()
    this.state = {
       
        

    } 
}

componentDidMount() {
    fetch(' https://fantasy.premierleague.com/api/bootstrap-static/total_players')
    .then(res => res.json())
    .then(data => {
        // this.setState({books:data})
        console.log(this.state);
    //   this.props.displayBooks(data);
    })
    .catch(err =>{
      console.log(err);
})
// this.props.getBooks();
}
    render (){
    return (
        <>
        <div>{this.state}</div>
        </>
    )
    }
}

export default Books