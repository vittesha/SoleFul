import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
    static propTypes = {
        shoes: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            brand: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string,
        }),
        order: PropTypes.object,
        removeFromOrder: PropTypes.func
    };
    renderOrder = key => {
        const shoe = this.props.shoes[key];
        const count = this.props.order[key];
        const isAvailable = shoe && shoe.status === 'available';
        if (!shoe) {
            return null;
        }
        if (!isAvailable) {
            return (
                <li key={key}>Sorry! {shoe ? shoe.name : 'shoe'} is no longer available.</li>
            )
        }
        return (
            <li key={key}>
                <span className='count'> {count} </span> {shoe.name}
                <span> {count * shoe.price} </span>
                <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
            </li>
        );
    }
    render() {
        const orderIDs = Object.keys(this.props.order);
        const total = orderIDs.reduce((prevTotal, key) => {
            const shoe = this.props.shoes[key];
            const count = this.props.order[key];
            const isAvailable = shoe && shoe.status === 'available';
            if (isAvailable) {
                return prevTotal + (count * shoe.price);
            }
            return prevTotal;
        }, 0);
        return (
            <div className='order-wrap'>
                <h1>ORDER</h1>
                {orderIDs.map(this.renderOrder)}
                <div className='total'>
                    Total:
                    <strong>{total}</strong>
                </div>
            </div>
        );
    }
}

export default Order;