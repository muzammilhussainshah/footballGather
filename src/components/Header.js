// @app
import React from 'react';
import { Text, View, } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../styles/Colors';
import Button from './Button';
import { styles } from './styles';

const Header = ({ leftIcon, rightIcon, title, leftIconCallBack, rightIconCallBack, height, marginTop, disableBorder, disableRightBtn }) => {
    return (
        <View style={[styles.HeaderContainer(height, marginTop, disableBorder),]}>

            {leftIcon && <Button title={leftIcon}
                callBack={leftIconCallBack}
                titleStyle={styles.headerText(RFPercentage(1.8), Colors.skyBlue)} />}
            {title && <Text style={[styles.headerText(RFPercentage(2), Colors.white), styles.headerMiddleText]}>{title}</Text>}
            {rightIcon && <Button callBack={rightIconCallBack} title={rightIcon} titleStyle={styles.headerText(RFPercentage(1.8), disableRightBtn ? Colors.tabInactive : Colors.skyBlue)} />}

        </View>
    );
};
export default Header;
