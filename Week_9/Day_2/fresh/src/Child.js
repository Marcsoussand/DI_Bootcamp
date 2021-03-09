import {connect} from 'react-redux';
import {changePropTwoFromChild} from './actions';

const Child = (props) => {
 return (
     <>
     <p>Child property one: {props.property_one}</p>
     <input type='text' onChange={props.handleChange} />
     </>
 )
}

const mapStateToProps = (state) => {
    return{
        property_one: state.reducer_one.property_one
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange:(event) => dispatch(changePropTwoFromChild(event.target.value))
        

            }
        }

export default connect(mapStateToProps,mapDispatchToProps)(Child)