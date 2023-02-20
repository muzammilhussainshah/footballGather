// @app
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  // Button,
  FlatList,
  Dimensions,
  ScrollView
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Modal from "react-native-modal";
import RBSheet from "react-native-raw-bottom-sheet";

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Colors from '../../styles/Colors';
import { styles } from './styles';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { POSITIONDATA, SKILLSET } from './DummyData';


const Players = ({ navigation }) => {


  const windowHeight = Dimensions.get('window').height;
  const flex1 = windowHeight / 10
  const AddPlayerText = ({ title, marginTop }) => {
    return (
      <Text style={[styles.nameDetail, { marginTop: marginTop ? RFPercentage(.5) : RFPercentage(3) }]}>{title}</Text>
    )
  }
  const SkillSetField = ({ callBack, title, disableBorder, value }) => {
    return (
      <TouchableOpacity
        activeOpacity={.8}
        onPress={callBack}
        style={[styles.skillSetContainer, { borderBottomWidth: disableBorder ? 0 : .5 }]}>
        <Text style={styles.listTitle}>{title}</Text>
        <View style={styles.skillSetNameContainer}>
          <Text style={[styles.listTitle, { flex: 0 }]}>{value}</Text>
          <Entypo size={RFPercentage(2.5)} name='chevron-right' color={Colors.tabInactive} />
        </View>
      </TouchableOpacity>
    )
  }


  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('Unknown');
  const [selectedSkill, setSelectedSkill] = useState('Unknown');
  const SkillSetList = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={.8}
        onPress={() => {
          isModalVisible == 'skill' ?
            setSelectedSkill(item) :

            setSelectedPosition(item)
        }}
        style={[styles.skillSetContainer,
        {
          borderBottomWidth:
            isModalVisible == 'skill' ?
              index == SKILLSET.length - 1 ? 0 : .5
              :
              index == POSITIONDATA.length - 1 ? 0 : .5
        }
        ]}
      >
        <Text style={styles.listTitle}>{item}</Text>
        {
          isModalVisible == 'skill' ?
            selectedSkill == item &&
            <Entypo
              size={RFPercentage(2.5)}
              style={{ marginHorizontal: RFPercentage(1) }}
              name='check'
              color={Colors.tabActive} /> :
            selectedPosition == item &&
            <Entypo
              size={RFPercentage(2.5)}
              style={{ marginHorizontal: RFPercentage(1) }}
              name='check'
              color={Colors.tabActive} />

        }

      </TouchableOpacity>
    )
  }
  return (
    <>


      <View style={styles.container}>

        <Header
          leftIcon={'Edit'}
          rightIconCallBack={() => this.RBSheet.open()}

          rightIcon={<AntDesign size={RFPercentage(2.5)} name={'plus'} />}
          title={'Players'} />
        {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */}
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={flex1 * 9}
          openDuration={500}
          closeOnPressMask={true}
          customStyles={{
            container: {
              backgroundColor: "red",
              borderRadius: RFPercentage(2)
            },
            draggableIcon: {
              backgroundColor: "transparent"
            }
          }}
        >
          <View style={styles.modalContainer}>
            <Modal
              testID={'modal'}
              isVisible={isModalVisible == 'skill' || isModalVisible == 'position'}
              style={{ justifyContent: "flex-end", margin: 0 }}
              animationOut="slideOutRight"
              animationIn="slideInRight">
              {/* <ShortCut /> */}
              <View
                // onPress={() => setModalVisible(false)}
                style={{
                  height: "90%", width: "100%",
                  justifyContent: "flex-start", alignItems: 'flex-start'
                  , backgroundColor: Colors.tabBg, borderRadius: RFPercentage(1),
                  //  padding: RFPercentage(1)
                }}>
                <Header
                  height={RFPercentage(7)}
                  marginTop={'0%'}
                  disableBorder
                  leftIconCallBack={() => setModalVisible('')}
                  leftIcon={
                    <View style={{ flexDirection: 'row', alignItems: "center", paddingHorizontal: RFPercentage(1) }}>
                      <AntDesign size={RFPercentage(2.5)} name={'left'} color={Colors.skyBlue} />
                      <Text style={{ color: Colors.skyBlue, fontSize: RFPercentage(1.8), fontWeight: '600' }}>
                        Add Players
                      </Text>
                    </View>
                  }
                // rightIcon={'Save'}
                />
                <View style={{
                  backgroundColor: '#3f3f3f', marginTop: RFPercentage(2), paddingLeft: RFPercentage(1),
                  height: isModalVisible == 'skill' ? flex1 * 2 : flex1 * 3,
                  width: '100%'
                }}>
                  {isModalVisible == 'skill' ?
                    SKILLSET.map((item, index) => <SkillSetList item={item} index={index} />)
                    :
                    POSITIONDATA.map((item, index) => <SkillSetList item={item} index={index} />)
                  }

                </View>

              </View>

            </Modal>




            <Header
              height={RFPercentage(5)}
              marginTop={'0%'}
              disableBorder
              leftIconCallBack={() => this.RBSheet.close()}
              leftIcon={'Cancel'}
              rightIcon={'Save'}
            />
            <Text style={styles.addPlayer}>{`Add Player`}</Text>
            <AddPlayerText title={`NAME DETAIL`} />

            <SearchBar
              callBack={(text) => console.log(text, 'text')}
              placeHolder={`*Name of the player`}
              placeholderTextColor={Colors.tabInactive}
              textStyle={styles.playerName}
              containerStyle={styles.fieldContainer} />

            <AddPlayerText marginTop title={`Choose a name for your player so that you recognize him/her later on. Please note you can have players with the same name.`} />
            <AddPlayerText marginTop title={`*This field is mandatory`} />

            <Text style={styles.nameDetail}>{`SKILLSET & POSITION`}</Text>
            <View style={styles.skillSetAndPositionContainer}>
              <SkillSetField
                value={selectedSkill}
                title={"Skill"} callBack={() => setModalVisible('skill')} />
              <SkillSetField
                value={selectedPosition}
                title={"Position"} disableBorder callBack={() => setModalVisible('position')} />
            </View>
            <AddPlayerText marginTop title={`Make sure you balance your teams based on the skillset and position of your players.`} />
          </View>
        </RBSheet>
        {/* </View> */}
        <FlatList
          data={[0, 0, 0, 0, 0, 0]}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.listContainer}>
                <Text style={styles.listTitle}>{'Player Name'}</Text>
                <Entypo size={RFPercentage(2.5)} name='chevron-right' color={Colors.tabInactive} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.id}
        />
      </View >
    </>
  );
};
export default Players;
