import React, {useState, useEffect, useCallback} from 'react';
import {View, SafeAreaView, Button, Text, FlatList} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import styles from './Messages.style';
import ContentInputModal from '../../components/modal/ContentInputModal';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../utils/parseContentData';
import MessagesCard from '../../components/cards/MesagesCard';

const Messages = () => {
  console.log(auth().currentUser.email);
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState({});

  useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  const handleSendContent = content => {
    handleInputToggle();

    sendContent(content);
  };

  const sendContent = content => {
    const userMail = auth().currentUser.email;
    const contentObj = {
      text: content,
      userName: userMail.split('@')[0],
      date: new Date().toISOString(),
      dislike: 0,
      like: 0,
    };
    database().ref('messages/').push(contentObj);
  };

  const handleInputToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleBanane = item => {
    database()
      .ref(`messages/${item.id}`)
      .update({dislike: item.dislike + 1});
  };
  const handleLikeBanane = item => {
    database()
      .ref(`messages/${item.id}`)
      .update({like: item.like + 1});
  };

  const renderItem = ({item}) => (
    <MessagesCard
      data={item}
      onBanane={() => handleBanane(item)}
      onLike={() => handleLikeBanane(item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
      <FlatList data={contentList} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default Messages;
