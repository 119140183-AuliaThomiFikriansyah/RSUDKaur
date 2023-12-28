import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import React from 'react';
import {Colors} from '../../Assets';
import {Kamera, Waktu} from '../../Components';

const AbsenMasuk = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.view}>
          <Text
            style={{
              fontFamily: 'FiraSansRegular',
              fontSize: 18,
              color: Colors.PutihDefault,
            }}>
            Absen Masuk
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Waktu />
        <Kamera />
      </View>
    </SafeAreaView>
  );
};

export default AbsenMasuk;

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PutihDefault,
  },
  header: {
    width: windowWidth,
    height: windowheight * 0.1,
    backgroundColor: Colors.BiruDefault,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  view: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
  },
});
