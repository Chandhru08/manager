import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
return (
<View Style={styles.spinnerStyle}>
  <ActivityIndicator size={size || 'Large'} />
</View>
);
};

const styles = {
  spinnerStyle: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
}
};
export { Spinner };
