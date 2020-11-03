import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";

export default class Evolution extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.textfooter}>EVOLUÇÃO</Text>
        </View>

        <View style={styles.conteiner}>
          <View style={styles.flexContainer}>
            <TouchableOpacity style={styles.btnsubmit}>
              <Text style={styles.textsubmit}> Evoluções Anteriores </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnsubmit}>
              <Text style={styles.textsubmit}> Nova Evolução </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.flexContainer}>
            <TouchableOpacity style={styles.btnsubmit}>
              <Text style={styles.textsubmit}> Resultados </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnsubmit}>
              <Text style={styles.textsubmit}>Registro de dados</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.conteiner}>
            <TouchableOpacity
              style={styles.voltar}
              onPress={() => {
                this.clicou;
              }}
            >
              <Text style={styles.voltarTexto}>VOLTAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: "100%",
    marginLeft: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  flexContainer: {
    flexDirection: "row",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0087E2",
    width: "100%",
    height: "100%",
  },
  btnsubmit: {
    backgroundColor: "#FFFFFF",
    width: "37%",
    height: "70%",
    borderRadius: 20,
    alignItems: "center",
    padding: 45,
    marginTop: 30,
    justifyContent: "center",
    marginLeft: 25,
    marginBottom: 20,
  },
  textsubmit: {
    color: "#646464",
    fontSize: 18,
  },
  header: {
    backgroundColor: "#014573",
    padding: 20,
    height: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textfooter: {
    color: "white",
    fontSize: 26,
  },
  voltar: {
    width: 135,
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
    justifyContent: "center",
  },
});
