// @app
import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity, TouchableHighlight,
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
import DraggableFlatList from 'react-native-draggable-flatlist';


const ConfirmPlayers = ({ navigation }) => {
  const [isTouching, setisTouching] = useState(false)


  const [data, setData] = useState([
    { key: '1', title: 'messi', isDrag: true },
    { key: '2', title: 'ronaldo', isDrag: true },
    { key: '3', title: 'naseem shah', isDrag: true },
    { key: '4', title: 'Team A', isDrag: false },
    { key: '6', title: 'babar shah', isDrag: true },
    { key: '5', title: 'Team B', isDrag: false },
    { key: '7', title: 'kamran', isDrag: true },
    { key: '8', title: 'haris', isDrag: true },
  ]);


  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      item.isDrag ?
        <TouchableOpacity
          onPress={() => navigation.navigate('EditPlayer')}
          style={[styles.listContainer,]}>
          <Text style={styles.listTitle}>{item.title}</Text>
          <TouchableHighlight onLongPress={drag} onLongPressDelay={100}>
            <Entypo 
              disabled={isActive}
              size={RFPercentage(2.5)}
              name='menu'
              color={Colors.tabInactive} />
          </TouchableHighlight>

        </TouchableOpacity> :

        <TouchableOpacity
          onPress={() => navigation.navigate('EditPlayer')}
          style={[styles.listContainer,]}>
          <Text style={styles.listTitle}>{item.title}</Text>
        </TouchableOpacity>
    );
  };
  const onDragEnd = ({ data }) => {
    setData(data);
  };

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
        <DraggableFlatList
          scrollEnabled={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          onDragEnd={onDragEnd}
        />
      </View >
    </>
  );
};
export default ConfirmPlayers;
