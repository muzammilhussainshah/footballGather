import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: RFPercentage(1), backgroundColor: Colors.black },
   
    gatherText: { color: Colors.white, fontSize: RFPercentage(2), flex: 1 },
   
    middleContainer: { flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: "center" },
   
    gatherContainer: (index) => ({ minHeight: 100, width: '100%', paddingVertical: RFPercentage(1.5), overflow: "hidden", borderTopWidth: index == 0 ? 0 : .5, borderTopColor: Colors.tabInactive, }),
   
    gatherListContainer: { borderRadius: RFPercentage(2), overflow: 'hidden', backgroundColor: Colors.tabBg, paddingHorizontal: RFPercentage(1.5) },
});