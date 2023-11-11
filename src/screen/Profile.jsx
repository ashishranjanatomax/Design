import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GamePlayed from './GamePlayed';
import Badges from './Badges';


const TopBar = createMaterialTopTabNavigator();

const Profile = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.headerView}>
        <Image
          source={require('../../assets/image/applogo.png')}
          resizeMode="contain"
          style={styles.icon}
        />
        <Text style={styles.headerText}>Profile</Text>
        <Image
          source={require('../../assets/image/notification.png')}
          resizeMode="contain"
          style={styles.icon}
        />
      </View>

      {/* Image Section */}
      <View style={styles.profileHolder}>
        <Image
          source={require('../../assets/image/pro.png')}
          resizeMode="contain"
          style={{height: 150, width: 150}}
        />
        <Text style={styles.username}>Jina Simons</Text>
        <Text style={[styles.username, {color: '#727682'}]}>6000 Pts</Text>
      </View>

      {/* Description Text */}
      <View style={styles.descriptionholder}>
        <Text style={styles.descriptionText}>
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
      </View>

      {/* Logout Section */}
      <View style={styles.logoutview}>
        <Image
          source={require('../../assets/image/logout.png')}
          resizeMode="contain"
          style={{height: 35, width: 35}}
        />
        <Text style={styles.logout}>Logout</Text>
      </View>

      {/* Statics */}
      <View style={styles.static}>
        <View style={{flexDirection:'row',justifyContent:'center',alignSelf:'center',marginTop:-20}}>
        <Image source={require('../../assets/image/star.png')} resizeMode='contain' style={{height:40,width:40}}/>
        </View>
        <View style={styles.subStaticView}>
          <View style={styles.mainholder}>
            <Text style={styles.staticText}>Under or Over</Text>
            <View
              style={styles.view1}>
              <Image
                source={require('../../assets/image/up.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.subStaticText}>81%</Text>
            </View>
          </View>
          <View style={styles.mainholder}>
            <Text style={styles.staticText}>Top 5</Text>
            <View
              style={styles.view1}>
              <Image
                source={require('../../assets/image/down.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.subStaticText}>-51%</Text>
            </View>
          </View>
        </View>
      </View>

<TopBar.Navigator>
    <TopBar.Screen name='Games Played'component={GamePlayed}/>
    <TopBar.Screen name='Badges'component={Badges}/>
</TopBar.Navigator>
      
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  profileHolder: {
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
    alignItems: 'center',
  },
  icon: {
    height: 50,
    width: 50,
  },
  headerText: {
    color: '#727682',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Montserrat-Regular',
  },
  username: {
    color: '#333',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontWeight: '500',
  },
  descriptionholder: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  descriptionText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#727682',
    fontFamily: 'Montserrat-Regular',
  },
  logout: {
    color: '#727682',
    fontSize: 18,
    fontWeight: '600',
  },
  logoutview: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  staticText: {
    color: '#727682',
    fontSize: 18,
    fontWeight: '600',
  },
  subStaticText: {
    color: '#727682',
    fontSize: 28,
    fontWeight: '700',
  },
  static: {
    borderWidth: 1,
    borderColor: '#EEEAF3',
    width: '90%',
    alignSelf: 'center',
    marginTop:20,
    marginBottom: 15,
  },
  subStaticView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mainholder: {
    gap: 10,
    marginTop: 10,
  },
  image:{height: 35, width: 35},
  view1:{
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  }
});
