import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/6866/6866825.png', // Kadın İkonu
              }}
            />
            <Text style={styles.logo}>KETY</Text>
          </View>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Image
            style={styles.bannerImage}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIn-n39v9bogpmmnicSJd8ETKYQSVURcns6vqjesh23I8E8RIVkA7lTbrv6YCoUm6ZM8&usqp=CAU', // Bisiklet Süren Kadın
            }}
          />
        </View>

        {/* Featured Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <View style={styles.productRow}>
            <View style={styles.productCard}>
              {/* User Info */}
              <View style={styles.userContainer}>
                <Image
                  style={styles.userImage}
                  source={{
                    uri: 'data:image/jpeg;base64,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', // Kullanıcı Resmi
                  }}
                />
                <Text style={styles.userName}>Mehmet Müjdeci</Text>
              </View>
              {/* Product Image */}
              <Image
                style={styles.productImage}
                source={{
                  uri: 'data:image/jpeg;base64,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', // Ürün Resmi
                }}
              />
            
            </View>
            <View style={styles.productCard}>
              {/* User Info */}
              <View style={styles.userContainer}>
                <Image
                  style={styles.userImage}
                  source={{
                    uri: 'https://media.licdn.com/dms/image/v2/D4D03AQF4JAt0wEfPtA/profile-displayphoto-shrink_400_400/B4DZPJrADJHUAg-/0/1734255313735?e=1742428800&v=beta&t=1LvUid2hFKQzWDLqc8BO71eEM7BMiv-fscUyrBT7hss', // Kullanıcı Resmi
                  }}
                />
                <Text style={styles.userName}>Çağatay Savun</Text>
              </View>
              {/* Product Image */}
              <Image
                style={styles.productImage}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJraLXRQFbfMQDrJHVDnoL8km1Z6QjOK5wNg&s', // Ürün Resmi
                }}
              />
              
            </View>
          </View>
        </View>

        {/* Popular Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Products</Text>
          <View style={styles.productRow}>
            <View style={styles.productCard}>
              {/* User Info */}
              <View style={styles.userContainer}>
                <Image
                  style={styles.userImage}
                  source={{
                    uri: 'https://media.licdn.com/dms/image/v2/D4D03AQFESvJA_Rs8KQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697728165452?e=1742428800&v=beta&t=Oc1DL8ADtE_TxL9oVpS7ErsDOayDVSJlhJJB1bhflzE', // Kullanıcı Resmi
                  }}
                />
                <Text style={styles.userName}>Nurullah Arslan</Text>
              </View>
              {/* Product Image */}
              <Image
                style={styles.productImage}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jGIb-chFs86Kw5dbVLkpwSSsjzWnTM6abQ&s', // Ürün Resmi
                }}
              />
             
            </View>
            <View style={styles.productCard}>
              {/* User Info */}
              <View style={styles.userContainer}>
                <Image
                  style={styles.userImage}
                  source={{
                    uri: 'https://media.licdn.com/dms/image/v2/D4D35AQH1CMIEu9XLTA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1719446622059?e=1737291600&v=beta&t=DbsgCGToPSl_4mJ3MHwMGLKpnBatI724vaiW_NyMXls', // Kullanıcı Resmi
                  }}
                />
                <Text style={styles.userName}>Mahir Karasu</Text>
              </View>
              {/* Product Image */}
              <Image
                style={styles.productImage}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULJ9Y7ND_TcQpVroAjp2IHAwbMRqmvFdkAg&s', // Ürün Resmi
                }}
              />
            
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity>
          <Image
            style={styles.navIcon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png',
            }} // Home Icon
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.navIcon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/4743/4743041.png',
            }} // Categories Icon
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.navIcon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/13989/13989168.png',
            }} // '+' Icon
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.navIcon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3602/3602145.png',
            }} // notification
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.navIcon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
            }} // Profile Icon
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
