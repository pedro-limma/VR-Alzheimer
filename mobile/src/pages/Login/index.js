import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
        style={styles.background}>
        {/* <ScrollView style={{flex: 1}}>   */}
        <View style={styles.viewlogo}>
          <Image
            style={styles.imagee}
            source={require('../../assets/VR_design.png')}
          />
          <Text style={styles.vrtext}> VR ALZHEIMER </Text>
        </View>

        <View style={styles.conteiner}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={() => {}}
          />

          <TouchableOpacity style={styles.btnsubmit}>
            <Text style={styles.textsubmit} onPress={() => { props.navigation.navigate("Menu") }}> Entrar </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textt}> Criar Conta </Text>
          </TouchableOpacity>
        </View>
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0087E2',
  },
  viewlogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    height: '15%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 20,
    padding: 10,
  },
  btnsubmit: {
    backgroundColor: '#E59021',
    width: '90%',
    height: '15%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textsubmit: {
    color: '#fff',
    fontSize: 18,
  },
  imagee: {
    height: 94,
    width: 102,
    marginTop: 60,
    alignItems: 'center',
  },
  textt: {
    marginTop: 10,
    marginLeft: 100,
    color: 'white',
  },
  vrtext: {
    padding: 10,
    fontSize: 30,
    color: 'white',
  },
});
