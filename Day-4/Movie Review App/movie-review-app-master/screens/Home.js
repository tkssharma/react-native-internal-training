import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import ReviewForm from '../screens/ReviewForm';

export default function Home ({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReview] = useState([
    { title: 'Life', rating: 4, body: 'Lorem Ipsum', key: '1' },
    { title: 'The Irishman', rating: 4.3, body: 'Lorem Ipsum', key: '2' },
    { title: 'Marriage Story', rating: 4.1, body: 'Lorem Ipsum', key: '3' },
    { title: 'Roma', rating: 3.6, body: 'Lorem Ipsum', key: '4' }
  ]);

  const clickHandler = (item) => {
    navigation.navigate('ReviewDetails', item);
  }

  const updateReviews = (review) => {
    review.key = Math.random().toString();
    setReview((previousReview) => {
        return [review, ...previousReview]
    });
    setModalOpen(false);
  }
  return (
    <View style={ globalStyles.container }>

    <Modal 
      visible={modalOpen} 
      animationType='fade'
      animated
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.modalContent}>
        <MaterialIcons 
          name='close'
          size={24} 
          style={{...styles.modalToggle, ...styles.modalAction}} 
          onPress={() => setModalOpen(false)} 
        />
        <ReviewForm onSubmit={updateReviews}/>
      </View>
      </TouchableWithoutFeedback>
    </Modal>

    <MaterialIcons 
      name='add' 
      size={24} 
      style={{...styles.modalToggle, ...styles.modalAction}} 
      onPress={() => setModalOpen(true)} 
    />
    <FlatList
      data = { reviews }
      renderItem = { ({ item }) => (
      <TouchableOpacity onPress={ () => clickHandler(item)}>
      <Card>
        <Text style={globalStyles.textTitle}>{ item.title }</Text>    
      </Card>
    </TouchableOpacity>
    )}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalAction: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1
  }
});