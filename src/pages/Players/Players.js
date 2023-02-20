// @app
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  // Button,
  FlatList,
  Dimensions,
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
import {
  AddPlayerText,
  SkillSet,
  SkillSetField,
} from './Components/Component';


const Players = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('Unknown');
  const [selectedSkill, setSelectedSkill] = useState('Unknown');

  const windowHeight = Dimensions.get('window').height;
  const flex1 = windowHeight / 10

  return (
    <>


      <View style={styles.container}>

        <Header
          leftIcon={'Edit'}
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

            <AddPlayerText
              marginTop
              title={`Choose a name for your player so that you recognize him/her later on. Please note you can have players with the same name.`}
            />
            <AddPlayerText
              marginTop
              title={`*This field is mandatory`} />

            <Text style={styles.nameDetail}>{`SKILLSET & POSITION`}</Text>
            <View style={styles.skillSetAndPositionContainer}>
              <SkillSetField
                value={selectedSkill}
                title={"Skill"}
                callBack={() => setModalVisible('skill')} />
              <SkillSetField
                value={selectedPosition}
                title={"Position"}
                disableBorder
                callBack={() => setModalVisible('position')} />
            </View>
            <AddPlayerText
              marginTop
              title={`Make sure you balance your teams based on the skillset and position of your players.`}
            />
          </View>
        </RBSheet>

        <FlatList
          data={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={[styles.listContainer,]}>
                <Text style={styles.listTitle}>{'Player Name'}</Text>
                <Entypo
                  size={RFPercentage(2.5)}
                  name='chevron-right'
                  color={Colors.tabInactive} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.id}
        />
        <Button
          title={'Confirm Players'}
          customStyle={styles.confirmContainer}
          titleStyle={styles.confirmStyle}
        />
      </View >
    </>
  );
};
export default Players;
