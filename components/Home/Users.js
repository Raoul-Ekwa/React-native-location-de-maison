import { View, Text, FlatList } from "react-native";
import userList from '@/assets/datas/datas-user.json';
import { StyleSheet } from "react-native-web";
import UsersItem from "./UsersItem";

const User = () => {
    return (
        <View style={{marginLeft: 15, gap: 20, marginTop: 15}}>
            <Text style={styles.title}>Nos meilleurs utilisateurs</Text>
            <FlatList
            
                data={userList}
                contentContainerStyle={styles.root}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={(item) => item.id} 

                renderItem={({item}) => <UsersItem user={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        marginTop: 20,
        //paddinRight: 20
    }
})

export default User;