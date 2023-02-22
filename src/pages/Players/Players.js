// @app
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  AsyncStorage
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SwipeListView } from 'react-native-swipe-list-view';

import Modal from "react-native-modal";
import RBSheet from "react-native-raw-bottom-sheet";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Colors from '../../styles/Colors';
import { styles } from './styles';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import {
  AddPlayerText,
  List,
  SkillSet,
  SkillSetField,
} from './Components/Component';


const Players = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('Unknown');
  const [selectedSkill, setSelectedSkill] = useState('Unknown');
  const [playerName, setplayerName] = useState('');
  const [isEdit, setisEdit] = useState(false);

  const windowHeight = Dimensions.get('window').height;
  const flex1 = windowHeight / 10

  const [playersData, setPlayersData] = useState([])


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getPlayersData()
    });
    return unsubscribe;
  }, [navigation]);



  const getPlayersData = async () => {
    let data = await AsyncStorage.getItem('Players');
    if (data !== null) setPlayersData(JSON.parse(data))
  }

  const deleteFunc = async (data) => {
    const newItems = playersData.filter((item) => item.id !== data?.item?.id);
    await AsyncStorage.setItem('Players', JSON.stringify(newItems));
    setPlayersData(newItems);
  }
  const addPlayer = async () => {
    let obj = { text: playerName, selectedSkill, selectedPosition, id: Math.random().toString(36).substring(2, 8) }
    let playersCopy = JSON.parse(JSON.stringify(playersData))
    playersCopy.push(obj)
    await AsyncStorage.setItem('Players', JSON.stringify(playersCopy));
    setPlayersData(playersCopy)
    setplayerName('')
    this.RBSheet.close()
  }

  return (
    <>
      <View style={styles.container}>
        <Header
          disableLeftBtn={playersData?.length > 0 ? false : true}
          leftIcon={isEdit ? 'Done' : 'Edit'}
          leftIconCallBack={() => { setisEdit(!isEdit) }}
          rightIconCallBack={() => this.RBSheet.open()}
          rightIcon={<AntDesign size={RFPercentage(2.5)} name={'plus'} />}
          title={'Players'} />

        <RBSheet
          ref={ref => { this.RBSheet = ref; }}
          height={flex1 * 9}
          openDuration={500}
          closeOnPressMask={true}
          customStyles={{
            container: { borderRadius: RFPercentage(2) },
            draggableIcon: { backgroundColor: "transparent" }
          }}
        >
          <View style={styles.modalContainer}>
            <Modal
              testID={'modal'}
              isVisible={isModalVisible == 'skill' || isModalVisible == 'position'}
              style={{ justifyContent: "flex-end", margin: 0 }}
              animationOut="slideOutRight"
              animationIn="slideInRight">
              <SkillSet
                setSelectedPosition={setSelectedPosition}
                selectedPosition={selectedPosition}
                selectedSkill={selectedSkill}
                setModalVisible={setModalVisible}
                setSelectedSkill={setSelectedSkill}
                isModalVisible={isModalVisible}
              />
            </Modal>

            <Header
              height={RFPercentage(5)}
              marginTop={'0%'}
              disableBorder
              leftIconCallBack={() => this.RBSheet.close()}
              leftIcon={'Cancel'}
              rightIconCallBack={async () => addPlayer()}
              disableRightBtn={playerName.length > 0 ? false : true}
              rightIcon={'Save'}
            />
            <Text style={styles.addPlayer}>{`Add Player`}</Text>
            <AddPlayerText title={`NAME DETAIL`} />

            <SearchBar
              callBack={(text) => setplayerName(text)}
              placeHolder={`*Name of the player`}
              placeholderTextColor={Colors.tabInactive}
              textStyle={styles.playerName}
              containerStyle={styles.fieldContainer} />

            <AddPlayerText marginTop title={`Choose a name for your player so that you recognize him/her later on. Please note you can have players with the same name.`} />
            <AddPlayerText marginTop title={`*This field is mandatory`} />
            <AddPlayerText title={`SKILLSET & POSITION`} />

            <View style={styles.skillSetAndPositionContainer}>
              <SkillSetField value={selectedSkill} title={"Skill"} callBack={() => setModalVisible('skill')} />
              <SkillSetField value={selectedPosition} title={"Position"} disableBorder callBack={() => setModalVisible('position')} />
            </View>

            <AddPlayerText marginTop title={`Make sure you balance your teams based on the skillset and position of your players.`}

            />
          </View>
        </RBSheet>
        {playersData?.length > 0 ?
          <SwipeListView
            data={playersData}
            renderItem={(data, rowMap) => {
              return (
                <List
                  navigation={navigation}
                  callback={() => deleteFunc(data)}
                  isEdit={isEdit} data={data} />
              )
            }}
            renderHiddenItem={(data, rowMap) => (
              <TouchableOpacity
                onPress={() => { deleteFunc(data) }}
                activeOpacity={.9}
                style={styles.deleteIconContainer}>
                <MaterialCommunityIcons
                  name={'delete'}
                  color={Colors.white}
                  size={RFPercentage(3)} />
              </TouchableOpacity>
            )}
            rightOpenValue={isEdit ? 0 : -RFPercentage(6)}
          />
          :
          <>
            <Text style={{ color: Colors.white, fontSize: RFPercentage(1.6), textAlign: 'center', marginTop: '80%' }}>We could not find any players .</Text>
            <Text style={{ color: Colors.white, fontSize: RFPercentage(1.6), textAlign: 'center' }}>Please create one.</Text>
          </>
        }
        {playersData?.length > 0
          &&
          <Button
            callBack={() => { if (playersData.length > 0) navigation.navigate('ConfirmPlayers', { playersData }) }}
            title={'Confirm Players'}
            customStyle={styles.confirmContainer}
            titleStyle={styles.confirmStyle((playersData.length > 0) ? false : true)}
          />
        }
      </View >
    </>
  );
};
export default Players;
