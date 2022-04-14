import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, TextInput} from 'react-native';
import styles from './ContentInputModal.style';
import Button from '../../Button/Button';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState(null);

  const handleSend = () => {
    if (!text) {
      return;
    }

    onSend(text);
    setText('');
  };
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder="Darla hadi milleti"
            multiline={true}
            onChangeText={setText}
          />
        </View>
        <Button text={'Gönder'} onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
