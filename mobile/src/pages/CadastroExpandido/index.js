import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

export default class RegisterExpand extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
        style={styles.background}
      >
        <ScrollView style={styles.scrollview}>
          <View style={styles.header}>
            <Text style={styles.textfooter}>CADASTRO</Text>
          </View>

          <View style={styles.conteiner}>
            <Text style={styles.disctext}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Pedro Ricardo Negrão Lima junior"
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <Text style={styles.disctext}>Data de nascimento</Text>
            <View style={styles.flexContainer}>
              <TextInput
                style={styles.inputFlex}
                placeholder="dd"
                autoCorrect={false}
                maxLength={2}
                onChangeText={() => {}}
              />
              <TextInput
                style={styles.inputFlex}
                placeholder="mm"
                autoCorrect={false}
                maxLength={2}
                onChangeText={() => {}}
              />
              <TextInput
                style={styles.inputFlexA}
                placeholder="aaaa"
                autoCorrect={false}
                maxLength={4}
                onChangeText={() => {}}
              />
            </View>

            <Text style={styles.disctext}>CPF</Text>
            <TextInput
              style={styles.inputC}
              placeholder="000.000.000-00"
              autoCorrect={false}
              maxLength={14}
              cpfMask
              onChangeText={() => {}}
            />
            <Text style={styles.disctext}>Telefone</Text>
            <View style={styles.flexContainer}>
              <TextInput
                style={styles.inputFlex}
                placeholder="ddd"
                autoCorrect={false}
                maxLength={3}
                onChangeText={() => {}}
              />
              <TextInput
                style={styles.inputFlexB}
                placeholder="00000-0000"
                autoCorrect={false}
                maxLength={10}
                onChangeText={() => {}}
              />
            </View>

            <Text style={styles.disctext}>HDA</Text>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor nisl sit amet tortor rhoncus fermentum sit amet ut lacus. Suspendisse sed quam diam. Phasellus eget vestibulum ante. Fusce commodo placerat convallis. Cras dolor dolor, porttitor ut aliquam et, laoreet sit amet risus. Nulla at odio et diam dictum mattis. "
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
              />
            </View>

            <View style={styles.flexContainer}>
              <Text style={styles.disctext}>Selecionar vídeos</Text>
              <TouchableOpacity style={styles.btnsubmit}>
                <Text style={styles.textsubmit}>IR</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.disctext}>Vídeos adicionados:</Text>
            <View style={styles.videoContainer}>
              <Text style={styles.video1}>Praia #1</Text>
              <Text style={styles.video2}>Parque #2</Text>
              <Text style={styles.video3}>Floresta #3</Text>
            </View>

            <View style={StyleSheet.wrapper}>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity
                      style={styles.voltar}
                      onPress={() => {
                        this.clicou;
                      }}
                    >
                      <Text style={styles.voltarTexto}>VOLTAR</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity
                      style={styles.salvar}
                      onPress={() => {
                        this.clicou;
                      }}
                    >
                      <Text style={styles.salvarTexto}>SALVAR</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    width: 360,
    height: 200,
    contentContainer: {
      paddingVertical: 100,
    },
  },
  header: {
    backgroundColor: "#014573",
    padding: 20,
    height: "7%",
    width: "100%",
    alignItems: "center",
  },
  textfooter: {
    color: "white",
    fontSize: 26,
  },
  background: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0087E2",
  },
  conteiner: {
    flex: 1,
    width: "90%",
    height: "100%",
    marginLeft: 17,
  },
  flexContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 25,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    height: "5%",
    marginBottom: 15,
    color: "#222",
    fontSize: 15,
    borderRadius: 10,
    padding: 10,
  },
  inputC: {
    backgroundColor: "#fff",
    width: "70%",
    height: "5%",
    marginBottom: 15,
    color: "#222",
    fontSize: 15,
    borderRadius: 10,
    padding: 10,
  },
  inputFlex: {
    backgroundColor: "#fff",
    width: "14%",
    height: "90%",
    color: "#222",
    fontSize: 15,
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
    marginRight: 10,
    marginBottom: 15,
  },
  inputFlexA: {
    backgroundColor: "#fff",
    width: "23%",
    height: "90%",
    color: "#222",
    fontSize: 15,
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  inputFlexB: {
    backgroundColor: "#fff",
    width: "65%",
    height: "90%",
    color: "#222",
    fontSize: 15,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  btnsubmit: {
    backgroundColor: "#F38200",
    width: "25%",
    height: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 5.5,
  },
  textsubmit: {
    color: "#fff",
    fontSize: 18,
  },
  textback: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  textt: {
    marginTop: 10,
    marginLeft: 100,
    color: "white",
  },
  disctext: {
    padding: 7,
    fontSize: 20,
    color: "white",
  },
  videoContainer: {
    marginTop: 0,
    marginBottom: 0,
  },
  textArea: {
    backgroundColor: "#fff",
    width: "100%",
    height: "7%",
    marginBottom: 10,
    color: "#222",
    fontSize: 17,
    borderRadius: 10,
    padding: 10,
    height: 150,
    justifyContent: "flex-start",
  },
  video1: {
    backgroundColor: "#E2DFDF",
    width: "100%",
    marginBottom: 1,
    color: "#222",
    fontSize: 24,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    padding: 10,
    height: 50,
    textAlign: "center",
  },
  video2: {
    backgroundColor: "#E2DFDF",
    width: "100%",
    marginBottom: 1,
    color: "#222",
    fontSize: 24,
    padding: 10,
    height: 50,
    textAlign: "center",
  },
  video3: {
    backgroundColor: "#E2DFDF",
    width: "100%",
    marginBottom: 1,
    color: "#222",
    fontSize: 24,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    padding: 10,
    height: 50,
    textAlign: "center",
  },
  salvar: {
    width: 115,
    height: 50,
    backgroundColor: "orange",
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 46,
    alignItems: "center",
    borderRadius: 25,
    alignContent: "flex-end",
  },

  voltar: {
    width: 115,
    height: 50,
    backgroundColor: "#81BEF7",
    marginTop: 25,
    marginRight: 30,
    alignItems: "center",
    borderRadius: 25,
    alignContent: "flex-start",
  },

  voltarTexto: {
    fontSize: 17,
    color: "white",
    height: 50,
    marginTop: 13,
    alignItems: "center",
  },
  salvarTexto: {
    fontSize: 17,
    color: "white",
    height: 50,
    marginTop: 13,
    alignItems: "center",
  },
});
