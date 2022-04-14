import React from 'react';
import {View, Text} from 'react-native';
import styles from './MessagesCard.style';
import {format, formatDistance, subDays, parseISO} from 'date-fns';
import {es, ru, tr} from 'date-fns/locale';

const MessagesCard = ({data}) => {
  console.log(data.data);
  const formattedDate = formatDistance(parseISO(data.data), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  console.log(formattedDate);

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.text}>"{data.text}."</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <View style={styles.author}>
        <Text style={styles.author_text}>{data.userName}</Text>
      </View>
    </View>
  );
};

export default MessagesCard;
