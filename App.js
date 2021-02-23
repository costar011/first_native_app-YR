import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const APP = () => {
  return (
    <View style={styles.container}>
      {/*-- Top --*/}
      <View style={styles.topBox}>
        <View style={styles.yelloBox}>
          <Text style={styles.yelloText}>React-Native</Text>
        </View>
      </View>
      {/*-- red,blue,black Box --*/}
      <View style={styles.allBox}>
        {/*-- Left --*/}
        <View style={styles.redBox}></View>
        {/*-- Right --*/}
        <View style={styles.blueBox}>
          <View style={styles.blue}></View>
          {/*-- Bottom --*/}
          <View style={styles.black}>
            <TouchableOpacity style={styles.customBtn}>
              <Button color={'#0b0b0b'} title="start"></Button>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yelloBox: {
    flex: 1,
    backgroundColor: `#ecf07d`,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  yelloText: {
    fontSize: 30,
    fontWeight: `600`,
    marginLeft: 20,
    marginTop: 10,
  },

  topBox: {
    flex: 1,
  },
  allBox: {
    flexDirection: `row`,
    flex: 4,
  },
  redBox: {
    flex: 1,
    backgroundColor: `#f5141f`,
  },
  blueBox: {
    flex: 1,
  },
  blue: {
    flex: 1,
    backgroundColor: `#1422c4`,
  },
  black: {
    flex: 1,
    backgroundColor: `#0b0b0b`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customBtn: {
    width: 120,
    height: 40,
    backgroundColor: `#ff3`,
    borderRadius: 4,
  },
});

export default APP;
