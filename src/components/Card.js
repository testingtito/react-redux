import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard, fetchUsers } from '../actions/cardActions';

class Card extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  onButtonClick = () => {
    let id = this.props.card.id;
    this.props.deleteCard(id);
    // redirect to Contact page.
    this.props.history.push('/contact');
  }

  render() {
    console.log(this.props.users);
    const { title, body } = this.props.card;
    return (
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <h3 className="ui header">{title}</h3>
        <p>{body}</p>
        <button className="ui primary right button" onClick={this.onButtonClick}>
          Delete
        </button>
      </div>
    )
  }
}

// ownProps refers props of card component. This props will contain information about 
// the route parameters and we can grab their route parameter from the route.
// Then we are going to use that route parameter to find the particular card that 
// we want to connect to from the redux store.
const mapStateToProps = (state, ownProps) => {
  //use the props to grab the route parameter.
  let title = ownProps.match.params.user;
  // inside of the return, we write what we want to apploy to our props for this component
  // we want an individual card
  return {
    card: state.cards.find(card => card.title === title),
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // this function is going to attached to our props so that we can use it 
    // inside the component. But to do that we need to pass it into the connect function.
    deleteCard: id => { dispatch(deleteCard(id)) },
    fetchUsers: () => { dispatch(fetchUsers()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

