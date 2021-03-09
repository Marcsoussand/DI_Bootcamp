import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <>
        <div style={{backgroundColor:"black"}}>
        <Link to="/" style={{color:"white", margin:'12px'}} >Home</Link>
        <Link to="/about" style={{color:"white", margin:'12px'}}>About</Link>
        <Link to="/shop" style={{color:"white", margin:'12px'}}>Shop</Link>
        </div>
        </>
    )
    }
    
    export default NavBar