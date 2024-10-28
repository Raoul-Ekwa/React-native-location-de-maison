
import { FlatList} from "react-native";
import houseList from '@/assets/datas/datas-appartements.json'; 
import { StyleSheet } from "react-native-web";
import AppartementItem from "./AppartementItem";

const page = () => {
    return (
        <FlatList 
                 data={houseList}
                 contentContainerStyle={styles.flatlistContainer} // Pour rendre invisible la bar de scroll horizontal 
                 showsHorizontalScrollIndicator={false}
                 horizontal
                 keyExtractor={(item) => item.id.toString()} // Assurez-vous que chaque item a un ID unique
                 renderItem={ ({ item }) =>  < AppartementItem item={item}/>}
            />
    );
};

const styles = StyleSheet.create({
    
    flatlistContainer: {
        gap: 20, 
        marginLeft: 15, 
        paddingRight: 25
    },

});


export default page;