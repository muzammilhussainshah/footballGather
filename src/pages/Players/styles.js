import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: RFPercentage(1),
        backgroundColor: Colors.black 
    },
    listContainer: { height: RFPercentage(5), borderBottomWidth: RFPercentage(.1), borderBottomColor: Colors.tabBg, flexDirection: "row", alignItems:"center"},
});