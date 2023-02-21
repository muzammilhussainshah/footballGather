// @app
import React, { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import DraggableFlatList from 'react-native-draggable-flatlist';
import AntDesign from 'react-native-vector-icons/AntDesign'

import Colors from '../../styles/Colors';
import { styles } from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { PLAYERSDATA } from './DummyData';
import {
  getTeamMembers,
  renderItem
} from './Components/Component';

const ConfirmPlayers = ({ navigation }) => {

  const [data, setData] = useState(PLAYERSDATA);
  const [teamA, setteamA] = useState(getTeamMembers(data).teamA)
  const [teamB, setteamB] = useState(getTeamMembers(data).teamB)

  const onDragEnd = ({ data }) => {
    setteamA(getTeamMembers(data).teamA)
    setteamB(getTeamMembers(data).teamB)
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

        <Text style={styles.bench}>{`BENCH`}</Text>
        <DraggableFlatList
          scrollEnabled={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          onDragEnd={onDragEnd}
        />
        <Button
          callBack={() => { if (teamA.length > 0 && teamB.length > 0) navigation.navigate('GetherInProgress', { teamA, teamB }) }}
          title={'Start Gather'}
          customStyle={styles.confirmContainer}
          titleStyle={styles.confirmStyle((teamA.length > 0 && teamB.length > 0) ? false : true)}
        />
      </View >
    </>
  );
};
export default ConfirmPlayers;
