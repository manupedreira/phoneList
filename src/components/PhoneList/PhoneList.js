// ./react-redux-client/src/components/PhoneList/PhoneList.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Phone from '../../containers/Phone';

export default class PhoneList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ListGroup>
        {this.props.phones.map((phone, i) =>
          <Phone key={i} id={i} phone={phone} />
        )}
      </ListGroup>
    );
  }
}