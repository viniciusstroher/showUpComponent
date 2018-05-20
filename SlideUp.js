/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions ,
  Animated
} from 'react-native';

type Props = {};
export default class SlideUp extends Component<Props> {
  
  constructor (props) {
    super(props)
    this.state        = {dimensions: Dimensions.get('window'),bounceValue: new Animated.Value(100)}
  }

  _fechaPopup(){
      var value = 100;
      Animated.spring(
        this.state.bounceValue,
        {
          toValue: value,
          velocity: 3,
          tension: 2,
          friction: 8,
        }
      ).start();
  }

  render() {

    if (this.state.dimensions) {
      var { dimensions }      = this.state;
      var { width, height }   = dimensions;

    }

    var self = this;

    var value = 0;
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: value,
        velocity: 3,
        tension: 2,
        friction: 8,
      }
    ).start(function(){self._fechaPopup()});
    
    return (
      <Animated.View style={[styles.container,{transform: [{translateY: this.state.bounceValue}]}]}>
        <Text style={styles.textoMsgSlideUp}>Carregando meo chapa!</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   position: 'absolute',
   left:     0,
   bottom:   0,
   width: '100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },


  textoMsgSlideUp:{
   color:'#FFF',
   width:'100%',
   backgroundColor:'red',
   textAlign:'center',
   fontSize:40}
});
