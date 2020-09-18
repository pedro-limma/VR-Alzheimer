import React from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Placeholder,
  ScrollView,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  LeftContent,
  RightContent,
} from 'react-native-paper';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';

const remote =
  'https://i.pinimg.com/originals/54/27/10/542710e5150ee4f7340bea644f6c75f0.jpg';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.telaPrincipal}>
        <LinearGradient
          colors={['rgba(2, 54, 88, 0.4)', '#0091F2']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 400,
          }}
        />

        <ScrollView style={styles.scrollview}>
          <View style={styles.telaTitulo}>
            <Text style={styles.usuario}>Pedro Fonseca</Text>

            <TouchableOpacity style={styles.verPerfil}>
              <Text style={styles.verPerfil}>ver perfil</Text>
            </TouchableOpacity>
          </View>

          <Card style={styles.cards}>
            <Card.Title style={styles.cardsTexto} title="Parque" />
            <Card.Title style={styles.subTexto} title="5 min" />
            <TouchableOpacity
              style={styles.assistir}
              onPress={() => {
                this.clicou;
              }}>
              <Text style={styles.assistirTexto}>Assistir</Text>
            </TouchableOpacity>
            <Card.Cover
              style={styles.imagens}
              source={{
                uri:
                  'https://www.osmais.com/wallpapers/201308/bicicleta-parque-wallpaper.jpg',
              }}
            />
          </Card>

          <Card style={styles.cards}>
            <Card.Title style={styles.cardsTexto} title="Praia" />
            <Card.Title style={styles.subTexto} title="15 min" />
            <TouchableOpacity
              style={styles.assistir}
              onPress={() => {
                this.clicou;
              }}>
              <Text style={styles.assistirTexto}>Assistir</Text>
            </TouchableOpacity>
            <Card.Cover
              style={styles.imagens}
              source={{
                uri:
                  'https://profelisson.com.br/wp-content/uploads/2017/11/praia-palmeiras-wallpaper.jpg',
              }}
            />
          </Card>

          <Card style={styles.cards}>
            <Card.Title style={styles.cardsTexto} title="Floresta" />
            <Card.Title style={styles.subTexto} title="10 min" />
            <TouchableOpacity
              style={styles.assistir}
              onPress={() => {
                this.clicou;
              }}>
              <Text style={styles.assistirTexto}>Assistir</Text>
            </TouchableOpacity>
            <Card.Cover
              style={styles.imagens}
              source={{
                uri:
                  'https://www.wallpapergratis.com.br/image.php?id=92&width=600&height=338&cropratio=16:9&cropposition=&filename=1040750821',
              }}
            />
          </Card>
        </ScrollView>

        <View style={StyleSheet.wrapper}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={styles.voltar}
                  onPress={() => {
                    this.clicou;
                  }}>
                  <Text style={styles.assistirTexto}>VOLTAR</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={styles.evolucao}
                  onPress={() => {
                    this.clicou;
                  }}>
                  <Text style={styles.assistirTexto}>EVOLUÇÃO</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
