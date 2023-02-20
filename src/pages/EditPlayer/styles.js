import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    container: { flex: 1, paddingHorizontal: RFPercentage(1), backgroundColor: Colors.black },
    listContainer: { height: RFPercentage(5), borderBottomWidth: RFPercentage(.1), borderBottomColor: Colors.tabBg, flexDirection: "row", alignItems: "center" },
    listTitle: { fontSize: RFPercentage(1.8), fontWeight: '600', color: Colors.white, flex: 1 },
    nameDetail: { fontSize: RFPercentage(1.5), color: Colors.white, marginHorizontal: RFPercentage(2), marginTop: RFPercentage(3) },
    fieldContainer: { height: RFPercentage(4.5), marginVertical: RFPercentage(.5), borderRadius: RFPercentage(1), backgroundColor: '#3f3f3f', width: '100%', justifyContent: "center", },
    skillSetContainer: { flex: 1, borderBottomWidth: 1, borderRadius: 0, borderBottomColor: Colors.tabInactive, flexDirection: 'row', alignItems: 'center' },
    skillSetNameContainer: { justifyContent: "center", flexDirection: "row" },
    skillSetAndPositionContainer: { borderRadius: RFPercentage(1), marginVertical: RFPercentage(1), paddingLeft: RFPercentage(2), backgroundColor: '#3f3f3f', height: RFPercentage(9), overflow: 'hidden' },
    playerName: { color: Colors.tabInactive, marginHorizontal: RFPercentage(2), },
    addPlayer: { fontSize: RFPercentage(3.5), color: Colors.white, fontWeight: "700" },
    modalContainer: { flex: 1, backgroundColor: Colors.tabBg, padding: RFPercentage(1), paddingHorizontal: RFPercentage(1.5) },
    skillSetModalContainer: {
        height: "90%", width: "100%",
        justifyContent: "flex-start", alignItems: 'flex-start'
        , backgroundColor: Colors.tabBg, borderRadius: RFPercentage(1),
    },
    skillSetModalHeader: { flexDirection: 'row', alignItems: "center", paddingHorizontal: RFPercentage(1) },
    skillSetModalHeaderText: { color: Colors.skyBlue, fontSize: RFPercentage(1.8), fontWeight: '600' },
    skillSetModalListContainer: (isModalVisible, flex1) => ({
        backgroundColor: '#3f3f3f', marginTop: RFPercentage(2), paddingLeft: RFPercentage(1),
        height: isModalVisible == 'skill' ? flex1 * 2 : flex1 * 3,
        width: '100%'
    }),
    checkIcon: { marginHorizontal: RFPercentage(1) },
    confirmStyle: { color: Colors.skyBlue, textAlign: 'center', fontWeight: "600", fontSize: RFPercentage(1.8) },
    confirmContainer: { position: 'absolute', bottom: 0, padding: RFPercentage(2), width: Dimensions.get('window').width, backgroundColor: Colors.black, },
});