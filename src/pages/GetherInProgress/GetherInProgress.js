// @app
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
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
  Counter,
  CounterFooter,
  getTeamMembers,
  renderItem
} from './Components/Component';
import { ScrollView } from 'react-native-gesture-handler';



const windowHeight = Dimensions.get('window').height;
const flexH1 = windowHeight / 10
const GetherInProgress = ({ navigation, route }) => {
  const [teamAPoints, setteamAPoints] = useState(0)
  const [teamBPoints, setteamBPoints] = useState(0)








  return (
    <>
      <View style={styles.container}>

        <Header
          title={'Gather in Progress'}
        />
        <ScrollView contentContainerStyle={{ paddingBottom: RFPercentage(8) }}>
          <View style={{ height: flexH1 * 4 }}>
            <View style={styles.counterSection}>
              <Counter title={'TEAM A'} points={teamAPoints} setVal={setteamAPoints} />
              <Counter title={'TEAM B'} points={teamBPoints} setVal={setteamBPoints} />

            </View>
            {/* formatTime(remainingTime) */}
            <CounterFooter />
          </View>
          <FlatList
            data={[0, 0, 0, 0, 0, 0,]}
            contentContainerStyle={{}}
            scrollEnabled={false}
            ListHeaderComponent={() => {
              return (
                <Text style={styles.headerText}>{`TEAM A`}</Text>
              )
            }}
            renderItem={({ item }) => {
              return (
                <View style={styles.listContainer}>
                  <Text style={[styles.confirmStyle(true, null, RFPercentage(2)), { textAlign: 'left', color: Colors.white }]}>
                    {'Messi'}
                  </Text>
                </View>
              )
            }}
            keyExtractor={item => item.id}
          />
          <FlatList
            data={[0, 0, 0, 0, 0, 0,]}
            contentContainerStyle={{}}
            scrollEnabled={false}

            ListHeaderComponent={() => {
              return (
                <Text style={styles.headerText}>{`TEAM B`}</Text>
              )
            }}
            renderItem={({ item }) => {
              return (
                <View style={styles.listContainer}>
                  <Text style={[styles.confirmStyle(true, null, RFPercentage(2)), { textAlign: 'left', color: Colors.white }]}>
                    {'Messi'}
                  </Text>
                </View>
              )
            }}
            keyExtractor={item => item.id}
          />

        </ScrollView>
        <Button
          // callBack={() => { if (teamA.length > 0 && teamB.length > 0) navigation.navigate('ConfirmPlayers') }}
          title={'End Gather'}
          customStyle={styles.confirmContainer}
          titleStyle={styles.confirmStyle(false)}
        />
      </View >
    </>
  );
};
export default GetherInProgress;
