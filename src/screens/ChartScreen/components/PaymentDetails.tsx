import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import QR from '../../../assets/QR.png';

export default function PaymentDetails() {
  const itemPaymentDetails = [
    {
      name: 'Statement descriptor',
      discription: 'Atris Stavebni',
    },
    {
      name: 'Account Number',
      discription: '626111626/0300',
    },
    {
      name: 'Variable Symbol',
      discription: '159963',
    },
    {
      name: 'Fee',
      discription: '0%',
    },
  ];
  return (
    <View style={styles.paymentDetails}>
      <Text style={styles.paymentDetailsTitle}>PaymentDetails</Text>
      <View style={styles.containerPaymentItem}>
        {itemPaymentDetails.map((item, index) => {
          return (
            <View style={styles.wrapperPaymentDetails} key={index}>
              <Text style={styles.nameItem}>{item.name}</Text>
              <Text style={styles.descriptionItem}>{item.discription}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.paymentQRWrapper}>
        <Image source={QR} style={{width: 121, height: 121, marginBottom:14}} />
        <Text style={styles.qrText}>QR Code for Payment</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paymentDetails: {
    paddingHorizontal: 24,
  },
  paymentDetailsTitle: {
    color: 'rgb(16, 24, 33)',
    fontSize: 16,
    fontWeight: 600,
    marginBottom:11
  },
  containerPaymentItem: {
    borderColor: 'rgb(223, 225, 230)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 16,
    gap:12,
    marginBottom:14
  },
  wrapperPaymentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentQRWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  nameItem: {
    color: 'rgb(127, 136, 151)',
    fontSize: 14,
    fontWeight: 400,
  },
  descriptionItem: {
    color: 'rgb(16, 24, 33)',
    fontSize: 14,
    fontWeight: 500,
  },
  qrText: {
    color: 'rgb(16, 24, 33)',
    fontSize: 14,
    fontWeight: 400,
  },
});
