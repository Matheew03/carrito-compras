import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { stylesGLobal } from '../Theme/appTheme';

//interface definir los props del componente
interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Text style={{
            ...stylesGLobal.title,
            height: height * 0.15
        }}>{title}</Text>
    )
}
