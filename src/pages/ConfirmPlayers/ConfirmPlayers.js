// @app
import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import Colors from '../../styles/Colors';
import { styles } from './styles';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import {
  AddPlayerText,
  SkillSet,
  SkillSetField
} from '../Players/Components/Component';


const ConfirmPlayers = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>

        <Header
          leftIconCallBack={() => navigation.pop()}
          leftIcon={<AntDesign size={RFPercentage(2.5)} name={'left'} color={Colors.skyBlue} />}
          disableBorder
          title={'Confirm Players'}
        />
        
        <Text style={styles.bench}>BENCH</Text>

        <FlatList
          data={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('EditPlayer')}
                style={[styles.listContainer,]}>
                <Text style={styles.listTitle}>{'Player Name'}</Text>
                <Entypo
                  size={RFPercentage(2.5)}
                  name='menu'
                  color={Colors.tabInactive} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.id}
        />
      </View >
    </>
  );
};
export default ConfirmPlayers;
