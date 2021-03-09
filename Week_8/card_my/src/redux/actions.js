export const searchText = (value) => {
  return{
    type:'SEARCH_TEXT',
    payload: value
  }
}

export const setRobots = (arr) => {
  return{
    type:'SET_ROBOTS',
    payload: arr
  }
}

export const setAsyncRobots =() => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    dispatch({
      type:'SET_ROBOTS',
      payload: data
    })
  })
  .catch(err =>{
    console.log(err);
  })
}
