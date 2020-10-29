import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login/index';
import Menu from './src/pages/Menu/index';
//import Cadastro from './src/pages/Cadastro/index';
import Pacientes from './src/pages/Pacientes';
import Vide from './src/pages/Vide/index';

const Stack = createStackNavigator();

export default function Routes(props) {
    


    return (
        <>

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Menu" component={Menu} />
                    <Stack.Screen name="Lista de pacientes" component={Pacientes} />
                    <Stack.Screen name="Video" component={Vide} />
                </Stack.Navigator>
            </NavigationContainer>

        </>
    );

}