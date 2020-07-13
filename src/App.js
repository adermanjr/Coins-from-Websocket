import React, {Component} from 'react';
import UpdateCryptos from './components/updateCryptos';
//https://www.debuggr.io/react-setstate-is-not-a-function/

class App extends Component {

  state = {
    cotationRealTime: [],
    uriWebsocket: 'wss://api2.poloniex.com',
  };

  componentDidMount() {
    
    var socket = new WebSocket(this.state.uriWebsocket)
    socket.onopen = function(event) {
      console.log('WebSocket is connected.', event.data);
      var obj = JSON.stringify({'command': "subscribe", "channel": 1003})
      console.log(obj)
      console.log('onopen');
      socket.send(obj)
    };
    
    socket.onmessage = (event) => {
      var res = event.data
      if(res !== "[1010]"){
        this.updateCotation(res);
      }
    };
  }

  updateCotation = (cotation) => {
    console.log("updateCotation");
    const dataRes = JSON.parse(cotation);
    if (dataRes[2] != null) {
      const ret = { 'canal': dataRes[0], 'data': dataRes[2][0], 'coins': dataRes[2][2] };
      this.setState({
        cotationRealTime: ret,
      });
    }
  }

  randomHex(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render () {    
    let colors = {'date':this.randomHex(), 'value': this.randomHex()};
    return (
      <UpdateCryptos updateCryptos={this.state.cotationRealTime} colors={colors} />
    );
  }

}

export default App;
