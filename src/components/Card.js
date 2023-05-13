import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function ContactCard({ name, role, imageSource }) {
  return (
    <View style={styles.profile}>
      <View style={styles.imgdiv}>
        <Image source={imageSource} style={styles.img} />
      </View>
      <View style={styles.subprofile}>
        <Text style={styles.subprofilename}>{name}</Text>
        <Text style={styles.subprofilerole}>{role}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 2,
  },
  imgdiv: {
    marginRight: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  subprofile: {
    flexDirection: 'column',
  },
  subprofilename: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subprofilerole: {
    fontSize: 14,
    color: '#999',
  },
});

export default ContactCard;
