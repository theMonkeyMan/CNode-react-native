/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Login extends Component {
  static navigationOptions = {
    title: '登录',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../../asset/img/log.png')} style={styles.log}/>
        <TouchableHighlight
          style={styles.btnContainer}
          onPress={() => navigation.navigate('QRCodeScan')}
        >
          <View style={styles.btn}>
            <Icon name='ios-camera' size={25} color='#ebf2ea' />
            <Text style={styles.btnText}>
              请扫码登录
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  log: {
    marginTop: 100,
    marginBottom: 100
  },
  btnContainer: {
    borderRadius: 25,
  },
  btn: {
    backgroundColor: '#6f468f',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 25
  },
  btnText: {
    marginLeft: 12,
    fontSize: 18,
    color: '#d9e0d7'
  }
})

export default Login;
