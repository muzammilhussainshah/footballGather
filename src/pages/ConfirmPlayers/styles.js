import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    container: { flex: 1, paddingHorizontal: RFPercentage(1), backgroundColor: Colors.black },

    skillSetModalHeader: { flexDirection: 'row', },

    skillSetModalHeaderText: { color: Colors.skyBlue, fontSize: RFPercentage(1.8), fontWeight: '600' },

    listContainer: { height: RFPercentage(5), borderBottomWidth: RFPercentage(.1), borderBottomColor: Colors.tabBg, flexDirection: "row", alignItems: "center" },

    listTitle: { fontSize: RFPercentage(1.8), fontWeight: '600', color: Colors.white, flex: 1 },

    bench: { fontWeight: '600', color: Colors.tabInactive, marginTop: RFPercentage(2) },

    confirmStyle: (disabled) => ({ color: disabled ? Colors.tabInactive : Colors.skyBlue, textAlign: 'center', fontWeight: "600", fontSize: RFPercentage(1.8) }),

    confirmContainer: { position: 'absolute', bottom: '2%', padding: RFPercentage(1), width: Dimensions.get('window').width, backgroundColor: Colors.black, },

});