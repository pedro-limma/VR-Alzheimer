import * as React from 'react';
import { Component } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    Modal,
    TouchableHighlight


} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class App extends Component {

    constructor(props) {

        super(props);
        this.state = { date: '' }

    }

    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {

        const { modalVisible } = this.state;

        return (
            <>
                <View style={styles.container}>

                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                        style={styles.container}
                    >
                        <TouchableWithoutFeedback>

                            <View style={styles.content}>


                                <Text style={styles.InputText}>Altura</Text>
                                <TextInput
                                    style={styles.input}
                                    autoCorrect={false}
                                    onChangeText={() => { }}
                                    keyboardType={'numeric'}
                                />

                                <Text style={styles.InputText}>Largura de passos</Text>
                                <TextInput
                                    style={styles.input}
                                    autoCorrect={false}
                                    onChangeText={() => { }}
                                    keyboardType={'numeric'}
                                />

                                <Text style={styles.InputText}>Comprimento</Text>
                                <TextInput
                                    style={styles.input}
                                    autoCorrect={false}
                                    onChangeText={() => { }}
                                    keyboardType={'numeric'}
                                />

                                <Text style={styles.InputText}>Número de passos</Text>
                                <TextInput
                                    style={styles.input}
                                    autoCorrect={false}
                                    onChangeText={() => { }}
                                    keyboardType={'numeric'}
                                />

                                <View style={styles.content}>
                                    <DatePicker
                                        style={styles.btnDate}
                                        format="DD-MM-YYYY"
                                    />
                                </View>


                            </View>


                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>

                    <View >

                        <View style={styles.Linha}>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={styles.btnVoltar}
                                    onPress={() => {
                                        this.setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.TextBtn}>VOLTAR</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={styles.btn}
                                >
                                    <Text style={styles.TextBtn}>SALVAR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </View>



                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>

                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Deseja sair sem salvar as alterações?</Text>

                                <View style={styles.Linha}>
                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                        <TouchableOpacity
                                            style={styles.btn}
                                            onPress={() => {
                                                this.setModalVisible(!modalVisible);
                                            }}
                                        >
                                            <Text style={styles.TextBtn}>NÃO</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                        <TouchableOpacity
                                            style={styles.btnVoltar}
                                        >
                                            <Text style={styles.TextBtn}>SIM</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>

                        </View>
                    </Modal>

                </View>

            </>
        )

    }

}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#0087E2',
        flex: 1
    },

    content: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    input: {
        backgroundColor: '#fff',
        width: '50%',
        height: '10%',
        marginBottom: 15,
        color: 'black',
        fontSize: 17,
        borderRadius: 20,
        paddingHorizontal: 15,
    },
    InputText: {

        color: '#fff',
        fontSize: 20,
        margin: 10,

    },
    btn: {
        color: '#fff',
        padding: 16,
        width: '90%',
        height: 50,
        backgroundColor: '#81BEF7',
        marginTop: 25,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 25,
        color: '#fff',
        justifyContent: 'center'

    },

    btnVoltar: {

        marginBottom: 10,
        padding: 16,
        width: '90%',
        height: 50,
        backgroundColor: 'orange',
        marginTop: 25,
        alignItems: 'center',
        borderRadius: 25,
        color: '#fff',
        justifyContent: 'center',
        marginLeft: 10


    },
    Linha: {

        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'


    },
    btnDate: {

        padding: 16,
        width: '60%',
        height: 50,
        backgroundColor: '#fff',
        marginTop: 25,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 25,
        color: '#fff',
        justifyContent: 'center',
        marginLeft: 0,
        marginHorizontal: 0

    },
    TextBtn: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },

    //modal css
    centeredView: {
        top: '30%',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize:30
    }




});

