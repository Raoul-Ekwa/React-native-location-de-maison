import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

const UsersItem = ({ user }) => {
    return (
        <View style={{ gap: 10, padding: 10 }}>
            <TouchableOpacity style={styles.root}>
                {/* uri : est utilisé pour les URL */}
                {/* <Image  
                    source={{ uri: "/assets/images/maphoto.png" }} 
                    style={styles.userImage} 
                /> */} 
                {/* require : car l'image se trouve en local */}
                <Image 
                    source={require('@/assets/images/maphoto.png')} 
                    style={styles.userImage} 
                />

                <View style={styles.startContainer}>
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star" size={20} color="white" />
                        <FontAwesome name="star" size={20} color="white" />
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={styles.userName}>{user.lastname} {user.firstname}</Text>
                </View>
                <View style={styles.arrowItem}>
                    <Text style={{color:'white'}}>+40</Text>
                    <AntDesign name="arrowright" size={24} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#4e5ac8',
        width: 170,
        borderRadius: 15,
        padding: 10,
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 35, // Optionnel : arrondit l'image pour un effet cercle
        marginBottom: 10, // Espacement entre l'image et le texte
        resizeMode: 'cover' //t'assurer que l'image remplit le conteneur visuellement, sans être déformée
    },
    startContainer:{
        flexDirection:'row',
        alignItems: 'center',
        gap:2,
        marginTop: 10
    },
    userName: {
        color: 'white', 
        fontSize: 17
    },
    arrowItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    }
});

export default UsersItem;
