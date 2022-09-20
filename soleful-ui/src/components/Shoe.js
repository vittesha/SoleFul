import React from 'react';
import PropTypes from 'prop-types';

class Shoe extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            brand: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string,
        }),
        addToOrder: PropTypes.func,
    };
    render() {
        const { name, image, brand, price, status } = this.props.details;
        const isAvailable = status === 'available';
        return (
            <li className='menu-shoe'>
                <img src={image} alt={name} />
                <h3 className='shoe-name'>{name}
                    <span className='price'>{price}
                    </span>
                </h3>
                <p>{brand}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>{isAvailable ? 'Add To Order' : 'Sold Out'}</button>
            </li>
        );
    }
}

export default Shoe;