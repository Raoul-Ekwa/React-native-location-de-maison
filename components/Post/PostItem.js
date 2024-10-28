import {View, Text, StyleSheet,Image, Pressable} from 'react-native';
import PostActionIcon from './PostActionIcon';

const PostItem = ({postData}) => {
    const auClick = () => {
        //Alert.alert('Vous avez cliquez sur le post');
    };

    return (

        <Pressable onPress={auClick} style={styles.root}>
            <View>
                <View style={styles.postHeader}>
                    <Image 
                        source={require('@/assets/images/maphoto.png')} 
                        style={styles.userImage} 
                    />
                    <View style={{flexDirection: 'column', marginBottom:30}}>
                        <Text style={styles.userName}>{postData.userName}</Text>
                        <Text>il y'a 10 min</Text>
                    </View>
                     
                </View>

                {/* si un post a des images affiche-les   */}
                {postData.postPicture && (
                        <Image source={{
                            uri: postData.postPicture,
                        }}
                        style={styles.postImage}
                        />

                     )}
                     <View style={styles.postContainer}>
                        <Text style={styles.postText}>{postData.post}</Text>
                        <View style={styles.postFooter}>
                            <PostActionIcon iconName={"heart"} iconColor={"pink"} label='40 reactions'/>
                            <PostActionIcon iconName={"wechat"} iconColor={"grey"} label='25 commentaires'/>
                        </View>
                    </View>

                    
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create ({
    root: {
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 12,
        marginTop: 15
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 100,

    },
    userName: {
        fontWeight: "bold",
        fontSize: 20
    },
    postHeader: {
        flexDirection:'row',
         gap:10,
          padding:10
    },
    postImage: {
        aspectRatio: 4/3,
        height: '200'
    },
    postContainer: {
        padding: 15,
        
    },
    postText: {
        lineHeight: 25, // pour avoir de l'espace entre les lignes
    },
    postFooter: {
        flexDirection:'row',
            justifyContent:'space-between', 
            alignItems: 'center',
            borderTopColor:'#f2f2f2',
            borderTopWidth:1,
            marginTop: 10,
            marginBottom: 10,
            paddingTop:15
    }
})

export default PostItem;