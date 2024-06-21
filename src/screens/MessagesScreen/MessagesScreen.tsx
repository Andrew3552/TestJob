import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { item } from './item';

interface Message {
    img: ImageSourcePropType;
    name: string;
    description: string;
    time: string;
  }

  export default function MessagesScreen({ navigation }: { navigation: any }){
  const [messages, setMessages] = useState(item);

  const handleDelete = (index: number) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  const renderRightActions = (index: number) => (
    <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(index)}>
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All messages</Text>
      {messages.map((message, index) => (
        <Swipeable key={index} renderRightActions={() => renderRightActions(index)}>
          <View style={[styles.messageContainer, index === messages.length - 1 && { borderBottomWidth: 0 }]}>
            <View style={styles.wrapperImg}>
              <Image source={message.img} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{message.name}</Text>
              <Text style={styles.description}>{message.discription}</Text>
              <Text style={styles.time}>{message.time}</Text>
            </View>
          </View>
        </Swipeable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 24,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  wrapperImg: {
    width: 48,
    height: 48,
    backgroundColor: 'rgb(238, 239, 242)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    marginRight: 16,
  },
  image: {
    width: 22,
    height: 22,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: 'rgb(127, 136, 151)',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 4,
  },
  description: {
    color: 'rgb(16, 24, 33)',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  time: {
    color: 'rgb(127, 136, 151)',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: 'rgb(219, 10, 53)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    height: 38,
    width: 72,
  },
  deleteText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});
