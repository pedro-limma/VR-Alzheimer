import React from 'react';
import { StackedBarChart } from 'react-native-svg-charts';
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

export default class Resultados extends React.PureComponent {
    render() {
        const data = [
            {
                diaX: 3840,
                diaY: 1920,


            },
            {

                diaX: 1600,
                diaY: 1440,

            },
            {

                diaX: 640,
                diaY: 960,

            },
            {

                diaX: 3320,
                diaY: 480,

            },
        ]

        const colors = ['#48D1CC', '#E59021']
        const keys = ['diaX', 'diaY']

        return (

            <>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <StackedBarChart
                            style={{ height: 200 }}
                            keys={keys}
                            colors={colors}
                            data={data}
                            showGrid={false}
                            contentInset={{ top: 30, bottom: 30 }}
                            horizontal={true}
                        />
                    </View>


                    <View style={styles.content}>

                        <View style={styles.squares}>
                            <View style={styles.square1}></View>
                            <View style={styles.square2}></View>
                        </View>

                        <Text style={styles.text}>
                            A paragraph of text with an unassigned .
                            A second row of text with a web link
                        </Text>

                        <View style={styles.squares}>
                            <View style={styles.square1}></View>
                            <View style={styles.square2}></View>
                        </View>

                        <Text style={styles.text}>
                            A paragraph of text with an unassigned .
                            A second row of text with a web link
                        </Text>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            style={styles.btnVoltar}
                        >
                            <Text style={styles.TextBtn}>VOLTAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </>

        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#0087E2',
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        justifyContent: 'center'
    },

    content: {

        padding: 20,
        alignItems: 'flex-start',

    },
    text: {
        fontSize: 24,
        color: '#fff'
    },
    square1: {
        width: 50,
        height: 30,
        backgroundColor: '#48D1CC',
    },
    square2: {
        width: 50,
        height: 30,
        backgroundColor: '#E59021',
    },
    squares: {
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 10
    },
    box: {

        height: 240,
        borderLeftColor: 'black',
        borderLeftWidth: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 5,

    },
    
    btnVoltar: {

        padding: 16,
        width: '60%',
        height: 50,
        backgroundColor: '#81BEF7',
        marginTop: 25,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 25,
        justifyContent: 'center',
        marginLeft: 0,
        marginHorizontal: 0,


    },
    TextBtn:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

