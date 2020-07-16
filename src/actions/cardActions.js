import axios from 'axios';

export const deleteCard = (id) => {
  return {
    type: 'DELETE_CARD',
    id: id
  }
}

export const fetchUsers = () => {
  // we are going to return a function instead of JS object so inside of here 
  // we have to return a function and that function is going to dispatch the 
  // data we're goint to fetch from an API to the reducer and this time 
  // we are going to return a function.
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        dispatch({ type: 'FETCH_USERS', playload: data })
      })
  }
}
