import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Map, Marker } from 'pigeon-maps';
import { receiveIssLocation } from '../redux/actions'

class ISSLocation extends Component {
  //quando o componente montar, chamar a action
  componentDidMount() {
    const { receiveIssLocationAction } = this.props;
    receiveIssLocationAction();
  }

  render() {
    const { latitude, longitude } = this.props;
    return (
      <Map
        center={ [0, 0] }
        defaultWidth={ 450 }
        height={ 450 }
        minZoom={ 1.5 }
        maxZoom={ 8 }
        zoom={ 1.5 }
      >
        <Marker width={ 50 } anchor={ [latitude, longitude] } />
      </Map>
    );
  }
}

//ler o estado
//latitude e a longitude: vem do reducer criado, que veio da action
const mapStateToProps = (state) => ({
  latitude: state.issReducer.latitude,
  longitude: state.issReducer.longitude,
})

//precisa disparar a action através da actionCreator receiveIssLocation() com parenteses (pq retorna o objeto)
//qual objeto? a action em si
const mapDispatchToProps = (dispatch) => ({
  receiveIssLocationAction: () => dispatch(receiveIssLocation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);
