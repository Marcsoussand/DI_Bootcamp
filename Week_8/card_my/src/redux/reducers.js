let initState = {
  searchText: '',
  rb:[]
}

export const reducer = (state=initState,action={}) => {
  switch (action.type) {
    case 'SEARCH_TEXT':
      return {...state, searchText:action.payload}
      break;
    case 'SET_ROBOTS':
      return {...state, rb:action.payload}
      break;
    default:
      return {...state}
  }
}
