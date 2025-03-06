import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      backgroundColor: '#FFA500',
      height: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 30,
      paddingHorizontal: 10,
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 25,
      height: 25,
      marginHorizontal: 10,
    },
    logo: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    feed: {
      flex: 1,
      padding: 10,
    },
    post: {
      backgroundColor: '#f9f9f9',
      marginBottom: 10,
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontWeight: 'bold',
      fontSize: 16,
      flex: 1,
    },
    time: {
      color: '#888',
      fontSize: 12,
    },
    profilePic: {
      width: 30,
      height: 30,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: '#FFA500',
      marginLeft: 10,
    },
    profilePicImage: {
      width: '100%',
      height: '100%',
      borderRadius: 15,
    },
    postImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginTop: 10,
    },
    postText: {
      fontSize: 14,
      color: '#333',
    },
    footer: {
      backgroundColor: '#FFA500',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    footerIcon: {
      width: 30,
      height: 30,
    },
  });
  export default styles;
  