import React from 'react';
import {View, Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const deviceSize = Dimensions.get('window');

const Skeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          minHeight: deviceSize.height / 7,
          margin: 10,
          marginHorizontal: 20,
          borderRadius: 10,
        }}></View>
    </SkeletonPlaceholder>
  );
};

export default Skeleton;
