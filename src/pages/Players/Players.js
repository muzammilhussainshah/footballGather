// @app
import React from 'react';
import {
  View,
  Text, 
  TouchableOpacity,
  FlatList
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Colors from '../../styles/Colors';
import { styles } from './styles';
import Header from '../../components/Header';

const Players = ({ }) => {

  return (
    <View style={styles.container}>

      <Header
        leftIcon={'Edit'}
        rightIcon={<AntDesign size={RFPercentage(2.5)} name={'plus'} />}
        title={'Players'} />
        
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
    </View>
  );
};
export default Players;
