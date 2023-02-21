// @app
import React, { useState } from 'react';
import {
  View,
  AsyncStorage
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign'

import Colors from '../../styles/Colors';
import { styles } from './styles';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import {
  AddPlayerText,
  SkillSet,
  SkillSetField
} from '../Players/Components/Component';
import { updateData } from './Components/Component';


const EditPlayer = ({ navigation, route }) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [playerName, setplayerName] = useState(route?.params?.playedData?.text);
  const [selectedPosition, setSelectedPosition] = useState(route?.params?.playedData?.selectedPosition);
  const [selectedSkill, setSelectedSkill] = useState(route?.params?.playedData?.selectedSkill);

  return (
    <>
      <View style={styles.container}>

        <Modal
          testID={'modal'}
          isVisible={isModalVisible == 'skill' || isModalVisible == 'position'}
          style={{ justifyContent: "flex-end", margin: 0 }}
          animationOut="slideOutRight"
          animationIn="slideInRight">
          <SkillSet
            setSelectedPosition={setSelectedPosition}
            full
            selectedPosition={selectedPosition}
            selectedSkill={selectedSkill}
            setModalVisible={setModalVisible}
            setSelectedSkill={setSelectedSkill}
            isModalVisible={isModalVisible}
          />
        </Modal>

        <Header
          leftIconCallBack={() => navigation.pop()}

          leftIcon={<AntDesign size={RFPercentage(2.5)} name={'left'} />}
          disableBorder
          rightIcon={'Save'}
          rightIconCallBack={() => updateData(route)}
          disableRightBtn={playerName.length > 0 ? false : true}
          title={'Players'} />

        <View style={{ paddingHorizontal: RFPercentage(1) }}>

          <AddPlayerText title={`NAME DETAIL`} />
          <SearchBar
            callBack={(text) => setplayerName(text)}
            placeHolder={`*Name of the player`}
            value={playerName}
            placeholderTextColor={Colors.tabInactive}
            textStyle={styles.playerName}
            containerStyle={styles.fieldContainer} />
          <AddPlayerText title={`SKILLSET & POSITION`} />

          <View style={styles.skillSetAndPositionContainer}>
            <SkillSetField value={selectedSkill} title={"Skill"} callBack={() => setModalVisible('skill')} />
            <SkillSetField value={selectedPosition} title={"Position"} disableBorder callBack={() => setModalVisible('position')} />
          </View>

        </View>

      </View >
    </>
  );
};
export default EditPlayer;
