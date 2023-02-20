import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    container: { flex: 1, paddingHorizontal: RFPercentage(1), backgroundColor: Colors.black },

    skillSetModalHeader: { flexDirection: 'row', },

    skillSetModalHeaderText: { color: Colors.skyBlue, fontSize: RFPercentage(1.8), fontWeight: '600' },

    listContainer: { height: RFPercentage(5), borderBottomWidth: RFPercentage(.1), borderBottomColor: Colors.tabBg, flexDirection: "row", alignItems: "center" },

    listTitle: { fontSize: RFPercentage(1.8), fontWeight: '600', color: Colors.white, flex: 1 },
bench:{ fontWeight: '600', color: Colors.tabInactive, marginTop: RFPercentage(2) },
});