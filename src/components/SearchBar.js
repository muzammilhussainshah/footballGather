// @app
import React from 'react';
import { TextInput, View, } from 'react-native';

const SearchBar = ({ containerStyle, icon, value, textStyle, callBack, placeholderTextColor, placeHolder }) => {
    return (
        <View style={containerStyle}>
            {icon}
            <TextInput
                value={value ? value : null}
                inputMode={'numeric'}
                placeholderTextColor={placeholderTextColor}
                placeholder={placeHolder}
                onChangeText={(text) => callBack(text)}
                style={textStyle} />
        </View>
    );
};
export default SearchBar;
