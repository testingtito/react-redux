import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Contact = ({ cards }) => {

  return (
    <div>
      {
        cards.map(card => {
          return (
            <div
              className='ui raised very padded text container segment'
              style={{ marginTop: '80px' }}
            >
              <Link to={`/${card.title}`} className="ui header">{card.title}</Link>
              <p>{card.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

// We will be able to get access to the State of the store. Now we can grab some data from
// that state and attach them to props of the Contact component.
// The way we do this is by returning an object inside this function and this object
// represents the different properties that we want to add to the props. 
const mapStateToProps = state => {
  return {
    // state.careds is from rootReducer.js and we're applying to a property called cards
    // and we are going to map that to the props.
    cards: state.cards
  }
}

// connect() is a function that returns a higher order component, 
// and the higher order component is wrapping the Contact component.
// pass mapStateToProps function inside the Connect function, so when we connect to redux, 
// it knows that what data we want to grab from redux.
// we want cards data from redux state and we want to apply that data to cards and 
// that is our props object.
export default connect(mapStateToProps)(Contact)


