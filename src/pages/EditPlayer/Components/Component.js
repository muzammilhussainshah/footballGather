// @app
import React, { useState } from 'react';
import {
    AsyncStorage
} from 'react-native';

export const updateData = async (navigation,playerName,setplayerName, selectedPosition, selectedSkill, route) => {
    if (playerName.length > 0) {
        let data = await AsyncStorage.getItem('Players');
        if (data !== null) {
            let playersData = JSON.parse(data)
            let selectedData = playersData.filter((key) => key.id == route?.params?.playedData.id)
            if (selectedData.length > 0) {

                selectedData[0].text = playerName
                selectedData[0].selectedPosition = selectedPosition
                selectedData[0].selectedSkill = selectedSkill
            }
            await AsyncStorage.setItem('Players', JSON.stringify(playersData));
            setplayerName('')
            navigation.pop()

        }
    }
}