// @app
import React from 'react';
import { Text, View, } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../styles/Colors';
import Button from './Button';
import { styles } from './styles';

const Header = ({ leftIcon, rightIcon, title }) => {
    return (
        <View style={styles.HeaderContainer}>

            {leftIcon && <Button title={leftIcon} titleStyle={styles.headerText(RFPercentage(1.8), Colors.skyBlue)} />}
            {title && <Text style={[styles.headerText(RFPercentage(2), Colors.white), styles.headerMiddleText]}>{title}</Text>}
            {rightIcon && <Button title={rightIcon} titleStyle={styles.headerText(RFPercentage(1.8), Colors.skyBlue)} />}

        </View>
    );
};
export default Header;
