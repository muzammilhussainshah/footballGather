// @app
import React from 'react';
import {
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo'

import Colors from '../../../styles/Colors';
import { styles } from '../styles';

export const renderItem = ({ item, index, drag, isActive }) => {
    return (
        item.isDrag ?
            <View
                // onPress={() => navigation.navigate('EditPlayer')}
                style={[styles.listContainer,]}>
                <Text style={styles.listTitle}>{item.text}</Text>
                <TouchableHighlight onLongPress={drag} onLongPressDelay={100}>
                    <Entypo
                        disabled={isActive}
                        size={RFPercentage(2.5)}
                        name='menu'
                        color={Colors.tabInactive} />
                </TouchableHighlight>

            </View> :

            <View
                // onPress={() => navigation.navigate('EditPlayer')}
                style={[styles.listContainer,]}>
                <Text style={styles.listTitle}>{item.title}</Text>
            </View>
    );
};


export const getTeamMembers = (data) => {
    let teamAIndex = data.findIndex((key) => key?.id == 'Team A')
    let teamBIndex = data.findIndex((key) => key?.id == 'Team B')
    let totalTeamAMembers = data.slice(teamAIndex + 1, teamBIndex)
    let totalTeamBMembers = data.slice(teamBIndex + 1, data.length)
    return { teamA: totalTeamAMembers, teamB: totalTeamBMembers }
} 