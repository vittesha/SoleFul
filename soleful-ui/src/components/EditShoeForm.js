import React from 'react';
import PropTypes from 'prop-types';

class EditShoeForm extends React.Component {
    static propTypes = {
        shoe: PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string,
            desc: PropTypes.string,
            image: PropTypes.string,
        }),
        index: PropTypes.string,
        updateShoe: PropTypes.func,
        deleteShoe: PropTypes.func
    };

    handleChange = (event) => {
        // console.log(event.currentTarget.name);
        const updatedShoe = {
            ...this.props.shoe,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateShoe(this.props.index, updatedShoe);
    }
    render() {
        return (
            <div className='shoe-edit'>
                <input type="text" name="name" onChange={this.handleChange} value={this.props.shoe.name} />
                <input type="text" name="price" onChange={this.handleChange} value={this.props.shoe.price} />
                <select type="text" name="status" onChange={this.handleChange} value={this.props.shoe.status}>
                    <option value='available'>Fresh!</option>
                    <option value='unavailable'>Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.shoe.desc}> </textarea>
                <input type="text" name="image" onChange={this.handleChange} value={this.props.shoe.image} />
                <button onClick={() => this.props.deleteShoe(this.props.index)}>Remove Shoe</button>
            </div>
        );
    }
}

export default EditShoeForm;