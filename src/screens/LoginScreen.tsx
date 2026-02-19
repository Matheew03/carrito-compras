import React, { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { stylesGLobal } from '../Theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

//interface define la estructura del objeto del formulario
interface FormLogin {
    email: string;
    password: string;
}

export const LoginScreen = () => {
    //hook useState: permite gestionar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    //función para capturar los valores de mi formulario
    const handleChangeValue = (name: string, value: string): void => {
        console.log(name, " ", value);

    }

    return (
        <View>
            <StatusBar />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <Text style={stylesGLobal.titleWelcome}>Bienvenido de nuevo!</Text>
                <Text>Realiza tus compras de manera rápido y segura</Text>
                <View style={stylesGLobal.containerInput}>
                    <InputComponent placeholder='Email'
                        keyboardType='email-address'
                        handleChangeValue={handleChangeValue}
                        name='email' />
                    <InputComponent placeholder='Contraeña'
                        keyboardType='default'
                        handleChangeValue={handleChangeValue}
                        name='password' />
                </View>
                <ButtonComponent buttonText='Iniciar' />
            </BodyComponent>
        </View>
    )
}
