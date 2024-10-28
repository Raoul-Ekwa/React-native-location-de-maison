import {View, Text, StyleSheet} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const PostActionIcon = ({iconName,label, iconColor}) => {
    return(
        
        <View style={styles.root}>
            <AntDesign name={iconName} size={24} color={iconColor} />
            <Text>{label}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection:'row',
        alignItems: 'center', 
        gap:5
    }
})

export default PostActionIcon;

/* <View style={styles.footerPost}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <AntDesign name="heart" size={24} color="black" />
                <Text style={{margin:10}}>40 Reactions</Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center'}}>
                <FontAwesome name="comments-o" size={24} color="black" />
                <Text style={{margin:10}}> 15 commentaires</Text>
            </View>
            
        </View>*/