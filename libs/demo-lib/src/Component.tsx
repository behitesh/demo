import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CometChatMessages } from '@cometchat/chat-uikit-react-native';

const MainExport = () => {
  return (
    <View>
      <CometChatMessages />
    </View>
  );
};

export default MainExport;

const styles = StyleSheet.create({});
