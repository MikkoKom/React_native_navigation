import React from 'react';
import { Appbar } from 'react-native-paper';

const CustomAppBar = ({ navigation, previous, route }) => {
  return (
    <Appbar.Header>
      {/* Show a back button if there is a previous screen */}
      {previous ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        /* Show a right arrow if there is no previous screen (on HomeScreen) */
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} />
      )}
      <Appbar.Content title={route.name === 'Home' ? 'MD Nav Demo' : 'MD Nav Demo'} />
    </Appbar.Header>
  );
};

export default CustomAppBar;
