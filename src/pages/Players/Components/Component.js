import React, { useRef, useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign'

import Entypo from 'react-native-vector-icons/Entypo'
import Header from '../../../components/Header';
import Colors from '../../../styles/Colors';
import { POSITIONDATA, SKILLSET } from '../DummyData';
import { styles } from '../styles';



const windowHeight = Dimensions.get('window').height;
const flex1 = windowHeight / 10

export const SkillSet = ({ setModalVisible,full, isModalVisible, setSelectedPosition, selectedPosition, setSelectedSkill, selectedSkill, }) => {
    return (
        <View
            style={styles.skillSetModalContainer(full)}>
            <Header
                height={RFPercentage(7)}
                marginTop={'0%'}
                disableBorder
                leftIconCallBack={() => setModalVisible('')}
                leftIcon={
                    <View style={styles.skillSetModalHeader}>
                        <AntDesign size={RFPercentage(2.5)} name={'left'} color={Colors.skyBlue} />
                        <Text style={styles.skillSetModalHeaderText}>
                            {`Add Players`}
                        </Text>
                    </View>
                }
            />
            <View style={styles.skillSetModalListContainer(isModalVisible, flex1)}>
                {isModalVisible == 'skill' ?
                    SKILLSET.map((item, index) => <SkillSetList
                        setSelectedPosition={setSelectedPosition}
                        selectedPosition={selectedPosition}
                        selectedSkill={selectedSkill}
                        setModalVisible={setModalVisible}
                        setSelectedSkill={setSelectedSkill}
                        isModalVisible={isModalVisible}
                        item={item}
                        index={index} />)
                        :
                        POSITIONDATA.map((item, index) => <SkillSetList
                        setSelectedPosition={setSelectedPosition}
                        selectedPosition={selectedPosition}
                        selectedSkill={selectedSkill}
                        setModalVisible={setModalVisible}
                        setSelectedSkill={setSelectedSkill}
                        isModalVisible={isModalVisible}
                        item={item}
                        index={index} />)
                }

            </View>

        </View>
    )
}
export const SkillSetList = ({ item, isModalVisible, setModalVisible, setSelectedPosition, selectedPosition, setSelectedSkill, selectedSkill, index }) => {
    return (
        <TouchableOpacity
            activeOpacity={.8}
            onPress={() => {

                setModalVisible('')

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
                        style={styles.checkIcon}
                        name='check'
                        color={Colors.tabActive} /> :
                    selectedPosition == item &&
                    <Entypo
                        size={RFPercentage(2.5)}
                        style={styles.checkIcon}
                        name='check'
                        color={Colors.tabActive} />

            }

        </TouchableOpacity>
    )
}
export const SkillSetField = ({ callBack, title, disableBorder, value }) => {
    return (
        <TouchableOpacity
            activeOpacity={.8}
            onPress={callBack}
            style={[styles.skillSetContainer, { borderBottomWidth: disableBorder ? 0 : .5 }]}>
            <Text style={styles.listTitle}>{title}</Text>
            <TouchableOpacity style={styles.skillSetNameContainer}>
                <Text style={[styles.listTitle, { flex: 0 }]}>{value}</Text>
                <Entypo size={RFPercentage(2.5)} name='chevron-right' color={Colors.tabInactive} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
export const AddPlayerText = ({ title, marginTop }) => {
    return (
        <Text style={[styles.nameDetail, { marginTop: marginTop ? RFPercentage(.5) : RFPercentage(3) }]}>{title}</Text>
    )
}
