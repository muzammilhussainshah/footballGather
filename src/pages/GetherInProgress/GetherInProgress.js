// @app
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Text,
  View,
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import RBSheet from "react-native-raw-bottom-sheet";

import CustomTimeSelecter from '../../components/CustomTimeSelecter';
import Colors from '../../styles/Colors';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Counter,
  CounterFooter,
} from './Components/Component';



const windowHeight = Dimensions.get('window').height;
const flexH1 = windowHeight / 10
const GetherInProgress = ({ navigation, route }) => {
  const [teamA, setteamA] = useState(route.params.teamA)
  const [teamB, setteamB] = useState(route.params.teamB)
  const [teamAPoints, setteamAPoints] = useState(0)
  const [teamBPoints, setteamBPoints] = useState(0)
  const [getTime, setgetTime] = useState({ minuts: 10, seconds: 0 })
  const [remainingTime, setRemainingTime] = useState(600);

  const HOURS = Array.from(Array(91).keys());
  const MINUTS = Array.from(Array(60).keys());

  return (
    <>
      <View style={styles.container}>

        <Header
          title={'Gather in Progress'}
        />
        <ScrollView contentContainerStyle={{ paddingBottom: RFPercentage(8) }}>
          <RBSheet
            ref={ref => { this.RBSheet = ref; }}
            height={flexH1 * 9}
            openDuration={500}
            closeOnPressMask={true}
            customStyles={{
              container: {
                borderRadius: RFPercentage(2)
                , padding: RFPercentage(1), backgroundColor: Colors.tabBg
              },
              draggableIcon: { backgroundColor: "transparent" }
            }}
          >
            <Header
              height={RFPercentage(5)}
              marginTop={'0%'}
              disableBorder
              leftIconCallBack={() => this.RBSheet.close()}
              rightIconCallBack={() => {
                let makingTimeInSeconds = getTime.minuts * 60 + getTime.seconds;
                setRemainingTime(makingTimeInSeconds)
                this.RBSheet.close()
              }}
              leftIcon={'Cancel'}
              rightIcon={'Done'}
            />
            <View style={{ height: flexH1 * 3, flexDirection: 'row' }}>

              <View style={[styles.hoursContainer, {}]}>
                <CustomTimeSelecter
                  selectedIndex={10}
                  itemHeight={RFPercentage(5)}
                  getTime={(data) => {
                    let getTimeCopy = JSON.parse(JSON.stringify(getTime))
                    getTimeCopy.minuts = data
                    setgetTime(getTimeCopy)
                  }}
                  data={HOURS} />
                <Text style={{ color: Colors.white, fontSize: RFPercentage(2) }}>{`Minuts`}</Text>
              </View>
              <View style={[styles.hoursContainer, {}]}>
                <CustomTimeSelecter
                  selectedIndex={0}
                  itemHeight={RFPercentage(5)}
                  getTime={(data) => {
                    let getTimeCopy = JSON.parse(JSON.stringify(getTime))
                    getTimeCopy.seconds = data
                    setgetTime(getTimeCopy)
                  }}
                  data={MINUTS} />
                <Text style={{ color: Colors.white, fontSize: RFPercentage(2) }}>{`Seconds`}</Text>
              </View>

            </View>
          </RBSheet>
          <View style={{ height: flexH1 * 4 }}>
            <View style={styles.counterSection}>
              <Counter title={'TEAM A'}
                points={teamAPoints} setVal={setteamAPoints} />
              <Counter
                title={'TEAM B'} points={teamBPoints} setVal={setteamBPoints} />
            </View>

            <CounterFooter remainingTimeProp={remainingTime} callBack={() => this.RBSheet.open()} />

          </View>
          <FlatList
            data={teamA}
            contentContainerStyle={{}}
            scrollEnabled={false}
            ListHeaderComponent={() => <Text style={styles.headerText}>{`TEAM A`}</Text>}
            renderItem={({ item }) => {
              return (
                <View style={styles.listContainer}>
                  <Text style={[styles.confirmStyle(true, null, RFPercentage(2)), { textAlign: 'left', color: Colors.white }]}>
                    {item.title}
                  </Text>
                </View>
              )
            }}
            keyExtractor={item => item.id}
          />
          <FlatList
            data={teamB}
            contentContainerStyle={{}}
            scrollEnabled={false}

            ListHeaderComponent={() => <Text style={styles.headerText}>{`TEAM B`}</Text>}
            renderItem={({ item }) => {
              return (
                <View style={styles.listContainer}>
                  <Text style={[styles.confirmStyle(true, null, RFPercentage(2)), { textAlign: 'left', color: Colors.white }]}>
                    {item.title}
                  </Text>
                </View>
              )
            }}
            keyExtractor={item => item.id}
          />

        </ScrollView>
        <Button
          callBack={() => { alert('End Gather') }}
          title={'End Gather'}
          customStyle={styles.confirmContainer}
          titleStyle={styles.confirmStyle(false)}
        />
      </View >
    </>
  );
};
export default GetherInProgress;
