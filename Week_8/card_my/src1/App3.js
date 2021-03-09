import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import NavBar from './components/Navbar';
import Error from './components/Error';
import {Route, Switch} from 'react-router-dom';

const App3 = () => {
    return(
        <>
        <NavBar/>
        <Switch>
            <Route path='/' component={() => <Home data={'some data to home'}/>} exact/>
            <Route path='/about' render={() => <About data={'About page'}/>} />
            <Route path='/shop' children={<Shop/>} />
            <Route component={Error}/>
        </Switch>

        </>
    )
}

export default App3;