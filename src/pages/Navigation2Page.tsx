import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Navigation2Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>네비게이션 2</Text>
      <Text style={styles.subtitle}>두 번째 탭 페이지</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export { Navigation2Page }; 