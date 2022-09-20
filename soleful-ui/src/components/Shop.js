import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Order from './Order';
import Shoe from './Shoe';
import shoes from '../sample-shoes';

class Shop extends React.Component {
    state = {
        shoes: {

        },
        order: {

        }
    };

    static propTypes = {
        match: PropTypes.object
    };
    addShoe = shoe => {
        const shoes = { ...this.state.shoes };
        shoes[`shoe${Date.now()}`] = shoe;
        this.setState({ shoes: shoes });
    };
    updateShoe = (key, updatedShoe) => {
        const shoes = { ...this.state.shoes };
        shoes[key] = updatedShoe;
        this.setState({ shoes: shoes });
    };
    deleteShoe = (key) => {
        const shoes = { ...this.state.shoes };
        shoes[key] = null;
        this.setState({ shoes: shoes });
    };
    loadSamples = () => {
        this.setState({ shoes: shoes });
    }
    addToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order: order });
    }
    removeFromOrder = (key) => {
        const order = { ...this.state.order };
        delete order[key];
        this.setState({ order: order });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className='view'>
                    <div className="shop">
                        <button onClick={this.loadSamples}>Load Samples</button>
                        <h1>SHOP</h1>
                        <ul className="shoes">
                            {Object.keys(this.state.shoes).map(key => <Shoe key={key} index={key} details={this.state.shoes[key]} addToOrder={this.addToOrder} />)}
                        </ul>
                    </div>
                    <div className="cart">
                        <Order shoes={this.state.shoes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Shop;