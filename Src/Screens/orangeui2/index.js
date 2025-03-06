import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/31/31211.png',
            }}
          />
          <Text style={styles.logo}>KETY</Text>
        </View>
        <View style={styles.headerRight}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/54/54481.png',
            }}
          />
          <Image
            style={styles.icon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1170/1170678.png',
            }}
          />
        </View>
      </View>

      <ScrollView style={styles.feed}>
        {/* 1. Gönderi */}
        <View style={styles.post}>
          <View style={styles.userInfo}>
            <Image
              style={styles.avatar}
              source={{ uri: 'https://via.placeholder.com/50' }}
            />
            <Text style={styles.userName}>Amelia Nelson</Text>
            <Text style={styles.time}>20 min ago</Text>
            <View style={styles.profilePic}>
              <Image
                style={styles.profilePicImage}
                source={{ uri: 'https://via.placeholder.com/50' }}
              />
            </View>
          </View>
          <Image
            style={styles.postImage}
            source={{ uri: 'https://via.placeholder.com/300x200' }}
          />
        </View>

        {/* 2. Gönderi */}
        <View style={styles.post}>
          <View style={styles.userInfo}>
            <Image
              style={styles.avatar}
              source={{ uri: 'https://via.placeholder.com/50' }}
            />
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.time}>1 hour ago</Text>
            <View style={styles.profilePic}>
              <Image
                style={styles.profilePicImage}
                source={{ uri: 'https://via.placeholder.com/50' }}
              />
            </View>
          </View>
          <Text style={styles.postText}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
        </View>

        {/* 3. Gönderi */}
        <View style={styles.post}>
          <View style={styles.userInfo}>
            <Image
              style={styles.avatar}
              source={{ uri: 'https://via.placeholder.com/50' }}
            />
            <Text style={styles.userName}>Samantha Martin</Text>
            <Text style={styles.time}>5 June, 2019</Text>
            <View style={styles.profilePic}>
              <Image
                style={styles.profilePicImage}
                source={{ uri: 'https://via.placeholder.com/50' }}
              />
            </View>
          </View>
          <Image
            style={styles.postImage}
            source={{ uri: 'https://via.placeholder.com/300x200' }}
          />
        </View>

        {/* 4. Gönderi */}
        <View style={styles.post}>
          <View style={styles.userInfo}>
            <Image
              style={styles.avatar}
              source={{ uri: 'https://via.placeholder.com/50' }}
            />
            <Text style={styles.userName}>Jack Martin</Text>
            <Text style={styles.time}>4 June, 2019</Text>
            <View style={styles.profilePic}>
              <Image
                style={styles.profilePicImage}
                source={{ uri: 'https://via.placeholder.com/50' }}
              />
            </View>
          </View>
          <Text style={styles.postText}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Image
          style={styles.footerIcon}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/25/25301.png',
          }}
        />
        <Image
          style={styles.footerIcon}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2763/2763181.png',
          }}
        />
        <Image
          style={styles.footerIcon}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/952/952679.png',
          }}
        />
        <Image
          style={styles.footerIcon}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/597/5971770.png',
          }}
        />
        <Image
          style={styles.footerIcon}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/102/102231.png',
          }}
        />
      </View>
    </View>
  );
};

export default App;
