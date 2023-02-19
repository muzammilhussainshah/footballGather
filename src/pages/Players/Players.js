// @app
import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Colors from '../../styles/Colors';
import { styles } from './styles';
import { onShare, rateUs } from './Components/Component';
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
              <Text style={{ fontSize: RFPercentage(1.8), fontWeight: '600', color: Colors.white, flex: 1 }}>{'ahmed shah'}</Text>
              {/* <Text style={{ }}>{'ahmed shah'}</Text> */}
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
