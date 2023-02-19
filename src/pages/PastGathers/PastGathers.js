// @app
import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';

import Header from '../../components/Header';

import { styles } from './styles';

const PastGathers = () => {

  return (
    <View style={styles.container}>

      <Header title={'Past Gathers'} />

      <FlatList
        data={[0, 0, 0, 0]}
        contentContainerStyle={styles.gatherListContainer}
        renderItem={({ item, index }) => {
          return (
            <View
              style={styles.gatherContainer(index)}>
              <Text style={styles.gatherText}>{'Player Name'}</Text>
              <View style={styles.middleContainer}>
                <Text style={[styles.gatherText, { flex: 0 }]}>{'vs'}</Text>
                <Text style={[styles.gatherText, { flex: 0 }]}>{'0:0'}</Text>
              </View>
              <Text style={styles.gatherText}>{'Player Name'}</Text>
            </View>
          )
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default PastGathers;
