import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    container: { flex: 1, backgroundColor: Colors.black },
    confirmStyle: (disabled, color, size) => ({ color: color ? color : disabled ? Colors.tabInactive : Colors.skyBlue, textAlign: 'center', fontWeight: "600", fontSize: size ? size : RFPercentage(1.8) }),

    confirmContainer: { position: 'absolute', bottom: '0%', paddingBottom: RFPercentage(3), paddingTop: RFPercentage(1.5), width: Dimensions.get('window').width, backgroundColor: Colors.black, },
    counterContainer: { flex: 1, justifyContent: 'space-evenly', alignItems: "center" },
    counterText: { color: Colors.white, fontSize: RFPercentage(4.5), },
    counterIconsContainer: { flexDirection: 'row', backgroundColor: Colors.tabBg, height: RFPercentage(4), borderRadius: RFPercentage(1), justifyContent: "center", alignItems: "center", width: RFPercentage(10) },
    minusIcons: { flex: 1, borderRightWidth: 1, borderRightColor: Colors.tabInactive, justifyContent: "center", alignItems: "center", },
    plusIcon: (flex) => ({ flex: flex ? flex : 1, justifyContent: "center", alignItems: "center", }),
    counterSection: { flex: 1, flexDirection: 'row' },
    counterFooter: { flex: 1, },
    listContainer: { height: RFPercentage(5), backgroundColor: Colors.tabBg, borderTopWidth: .5, borderTopColor: Colors.gray, justifyContent: "center", paddingHorizontal: RFPercentage(2) },
    headerText: { fontSize: RFPercentage(1.5), color: Colors.tabInactive, marginHorizontal: RFPercentage(2), marginVertical: RFPercentage(1) },

    unitContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    unit: { textTransform: 'lowercase', flex: 0 },

    hoursContainer: {
        flex: 1,
        // backgroundColor: Colors.red,
        alignItems: 'center',
        borderRadius: RFPercentage(1)
    },

    BookingTagsText: {
        flex: 1,
        // color: 'blue',
        fontSize: RFPercentage(2),
        textAlign: 'center',
        // fontFamily: ios ? 'Comfortaa-Regular' : 'Comfortaa-VariableFont_wght',
        textTransform: 'capitalize'
    },


});