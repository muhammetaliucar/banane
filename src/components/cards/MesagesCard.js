import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './MessagesCard.style';
import {format, formatDistance, subDays, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MessagesCard = ({data, onBanane, onLike}) => {
  const formattedDate = formatDistance(parseISO(data.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.author_text}>{data.userName}</Text>

        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>"{data.text}."</Text>
      </View>
      <View
        style={{
          flex: 0.33,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginEnd: 10,
        }}>
        <View>
          <AntDesign
            style={{marginStart: 8, color: 'white'}}
            onPress={onBanane}
            name="dislike1"
            size={30}
          />
          <Text style={{color: 'white', marginStart: 5, textAlign: 'center'}}>
            {data.dislike}
          </Text>
        </View>
        <View>
          <AntDesign
            style={{marginStart: 8, color: 'white'}}
            onPress={onLike}
            name="like1"
            size={30}
          />
          <Text style={{color: 'white', marginStart: 5, textAlign: 'center'}}>
            {data.like}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MessagesCard;
