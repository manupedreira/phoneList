// ./react-redux-client/src/components/PhoneItem/PhoneItem.js
import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

export default class PhoneItem extends React.Component {
  constructor(props){
    super(props);

    this.openDetails = this.openDetails.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
  }

  openDetails(){
      this.props.selectPhone(this.props.id);
  }

  closeDetails(){
      this.props.unselectPhone();
  }

  render(){
    const isSelected = this.props.id === this.props.selected;
    const url = require('./' + this.props.phone.image);
    const description = this.props.phone.description;
    const descriptionArray = description.split('\n');
    return(
        <ListGroupItem onClick={!isSelected ? this.openDetails : null} className={isSelected ? 'selected' : ''}>
            <img src={url} alt={this.props.phone.title}/>
            <div className='info-phone'>
                <h4>{this.props.phone.title}</h4>
                <p className='aumented'><strong>Color:</strong> {this.props.phone.color}</p>
                <div className='aumented'>
                    <p><strong>Screen</strong></p>
                    {descriptionArray.map((text, i) => 
                        <p key={i}>{text}</p>
                    )}
                </div>
                <p><strong>Price:</strong> {this.props.phone.price}</p>
            </div>
            <span onClick={isSelected ? this.closeDetails : null}>x</span>
        </ListGroupItem>
    );
  }
}