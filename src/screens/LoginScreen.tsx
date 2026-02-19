import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { stylesGLobal } from '../Theme/appTheme';

export const LoginScreen = () => {
    return (
        <View>
            <StatusBar />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <Text style={stylesGLobal.titleWelcome}>Bienvenido de nuevo!</Text>
                <Text>Realiza tus compras de manera rápido y segura</Text>
            </BodyComponent>
        </View>
    )
}
