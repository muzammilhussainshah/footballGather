// @app
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  AsyncStorage
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Header from '../../components/Header';
import Colors from '../../styles/Colors';

import { styles } from './styles';

const PastGathers = ({ navigation }) => {
  const [pastGather, setPastGather] = useState()
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getGatherData()
    });
    return unsubscribe;
  }, [navigation]);



  const getGatherData = async () => {
    let data = await AsyncStorage.getItem('GatheringHistory');
    if (data !== null) setPastGather(JSON.parse(data))
  }
  console.log(pastGather, 'pastGatherpastGather')
  return (
    <View style={styles.container}>

      <Header title={'Past Gathers'} />
      {pastGather?.length > 0 ?

        <FlatList
          data={pastGather}
          contentContainerStyle={styles.gatherListContainer}
          renderItem={({ item, index }) => {
            const { teamA, teamB, teamAPoints, teamBPoints } = item
            return (
              <View
                style={styles.gatherContainer(index)}>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                  {teamA.map((item) => <Text style={[styles.gatherText, { flex: 0 }]}>{item.text}</Text>)}
                </View>
                <View style={styles.middleContainer}>
                  <Text style={[styles.gatherText, { flex: 0 }]}>{'vs'}</Text>
                  <Text style={[styles.gatherText, { flex: 0 }]}>{teamAPoints + ':' + teamBPoints}</Text>
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                  {teamB.map((item) => <Text style={[styles.gatherText, { flex: 0 }]}>{item.text}</Text>)}
                </View>
              </View>
            )
          }}
          keyExtractor={item => item.id}
        /> :
        <>
          <Text style={{ color: Colors.white, fontSize: RFPercentage(1.6), textAlign: 'center', marginTop: '80%' }}>We could not find any History gather .</Text>
        </>
      }
    </View>
  );
};
export default PastGathers;
