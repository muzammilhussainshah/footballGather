import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../styles/Colors';
export const styles = StyleSheet.create({

    title: (isEdit) => ({ color: Colors.white, fontSize: RFPercentage(2), fontWeight: '700', textTransform: 'capitalize', flex: isEdit ? 1 : 0, textAlign: "center" }),

    headerText: (size, color) => ({ fontSize: size, fontWeight: '600', color: color }),
    headerMiddleText: { flex: 1, textAlign: 'center' },
    HeaderContainer: (height, marginTop, disableBorder) => ({ height: height ? height : RFPercentage(5), flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", borderBottomWidth: disableBorder ? 0 : RFPercentage(.1), borderBottomColor: Colors.tabBg, marginTop: marginTop ? marginTop : '15%' })

});