import React from 'react';
import {connect} from 'react-redux';
import {searchText} from '../redux/actions';

const SearchBox = ({handleSearch}) => {
    return(
      <div className="tc">
        <input type="search"
          placeholder="Search My Robots..."
          className = "pa3 ba b--green bg-lightest-blue"
          onChange = {handleSearch} />
      </div>
    )
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (e) => dispatch(searchText(e.target.value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBox);
