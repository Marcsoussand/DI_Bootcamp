// import { Button } from "bootstrap";
import './Language.css';



const Language = ({langdata}) => {
    const {name,votes} = langdata;
  

    return(
        <div className='langDiv'>
        <p>{votes}</p><p>{name}</p> <button onClick={this.chgVotes}>Click Here</button>
        </div>

    )
  }
  export default Language;