import React from 'react';
import PropTypes from 'prop-types';

class AddShoeForm extends React.Component {
    static propTypes = {
        addShoe: PropTypes.func
    };

    name = React.createRef();
    image = React.createRef();
    brand = React.createRef();
    price = React.createRef();
    status = React.createRef();

    createShoe = (e) => {
        // stop form from submitting
        e.preventDefault();
        const shoe = {
            name: this.nameRef.current.value,
            image: this.imageRef.current.value,
            brand: this.brandRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
        };
        this.props.addShoe(shoe);
        // refresh the form
        e.currentTarget.reset();
    };
    render() {
        return (
            <div className='AddShoeForm'>
                <form className='shoe-edit' onSubmit={this.createShoe}>
                    <input name='name' ref={this.nameRef} type='text' placeholder='Name' />
                    <input name='image' ref={this.imageRef} type='text' placeholder='Image' />
                    <input name='brand' ref={this.brandRef} type='text' placeholder='Brand'></input>
                    <input name='price' ref={this.priceRef} type='text' placeholder='Price' />
                    <select name='status' ref={this.statusRef}>
                        <option value='available'>Fresh!</option>
                        <option value='unavailable'>Sold Out!</option>
                    </select>
                    <button type='submit'>Add Shoe</button>
                </form>
            </div>
        );
    }
}

export default AddShoeForm;