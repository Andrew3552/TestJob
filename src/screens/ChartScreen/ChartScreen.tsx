import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import Chart from './components/Chart';
import PaymentDetails from './components/PaymentDetails';

export default function ChartScreen({navigation}) {
  return (
    <>
      <ScrollView>
        <View style={styles.header}>
          <View style={[styles.wrapperTextHeader, styles.leftStyle]}>
            <Text style={styles.headerName}>CP Nominal Value</Text>
            <Text style={styles.headerInfoValue}>1 Kč</Text>
          </View>
          <View style={styles.verticalLine}></View>
          <View style={[styles.wrapperTextHeader, styles.rightStyle]}>
            <Text style={styles.headerName}>Entry Fee</Text>
            <Text style={styles.headerInfoValue}>0%</Text>
          </View>
        </View>
        <Chart />
        <PaymentDetails />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure the space is distributed evenly
    paddingHorizontal: 24,
    marginTop: 20,
  },
  wrapperTextHeader: {
    flex: 1,
  },
  leftStyle: {
    alignItems: 'flex-start',
  },
  rightStyle: {
    marginLeft: 16,
    alignItems: 'flex-start',
  },
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: 'rgb(223, 225, 230)',
  },
  headerName: {
    fontSize: 14,
    color: 'rgb(102, 109, 128)',
    fontWeight: '400',
  },
  headerInfoValue: {
    fontSize: 16,
    color: 'rgb(13, 13, 18)',
  },
});
