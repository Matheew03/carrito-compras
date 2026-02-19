import React, { ReactNode } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { stylesGLobal } from '../Theme/appTheme';

interface Props{
    children: ReactNode; //componente react
}

export const BodyComponent = ({children}: Props) => {
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...stylesGLobal.containterBody,
            height: height * 0.85
        }}>
            {children}
        </View >
    )
}
