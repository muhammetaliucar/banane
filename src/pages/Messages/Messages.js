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
  const renderItem = ({item}) => <MessagesCard data={item} />;

  useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        let parsedData = parseContentData(contentData);
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
      data: new Date().toISOString(),
    };
    database().ref('messages/').push(contentObj);
  };

  const handleInputToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);

  const logout = async () => {
    await auth().signOut();
    console.log(auth().currentUser.email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
      <FlatList
        // onRefresh={onRefresh}
        data={contentList}
        renderItem={renderItem}
      />
      <Button title="çıkış yap" onPress={logout} />
    </SafeAreaView>
  );
};

export default Messages;
