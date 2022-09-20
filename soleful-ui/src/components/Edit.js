import React from 'react';
import PropTypes from 'prop-types';
import AddShoeForm from './AddShoeForm';
import EditShoeForm from './EditShoeForm';

class Edit extends React.Component {
    static propTypes = {
        shoes: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            brand: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string,
        }),
        updateShoe: PropTypes.func,
        addShoe: PropTypes.func,
        deleteShoe: PropTypes.func,
        loadSamples: PropTypes.func
    };

    state = {
        uid: null,
        owner: null
    }

    render() {
        return (
            <React.Fragment>
                <div className='Inventory'>
                    <h2>Inventory</h2>
                    {Object.keys(this.props.shoes).map(key => <EditShoeForm key={key} index={key} shoe={this.props.shoes[key]} updateShoe={this.props.updateShoe} deleteShoe={this.props.deleteShoe} />)}
                    <AddShoeForm addShoe={this.props.addshoe} />
                    <button onClick={this.props.loadSamples}>Load Samples</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Edit;