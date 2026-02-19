import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { stylesGLobal } from '../Theme/appTheme';

interface Props {
    buttonText: string;
}

export const ButtonComponent = ({ buttonText }: Props) => {
    return (
        <TouchableOpacity style={stylesGLobal.button}>
            <Text style={stylesGLobal.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}
