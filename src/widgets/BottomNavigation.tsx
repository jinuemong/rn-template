import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface TabItem {
  id: string;
  title: string;
  icon: string;
  component: React.ComponentType;
}

interface BottomNavigationProps {
  tabs: TabItem[];
  activeTab: string;
  onTabPress: (tabId: string) => void;
}

function BottomNavigation({ tabs, activeTab, onTabPress }: BottomNavigationProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tab}
          onPress={() => onTabPress(tab.id)}
        >
          <Text style={[
            styles.tabIcon,
            activeTab === tab.id && styles.activeTabIcon
          ]}>
            {tab.icon}
          </Text>
          <Text style={[
            styles.tabTitle,
            activeTab === tab.id && styles.activeTabTitle
          ]}>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingBottom: 20,
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
    color: '#999',
  },
  activeTabIcon: {
    color: '#007AFF',
  },
  tabTitle: {
    fontSize: 12,
    color: '#999',
  },
  activeTabTitle: {
    color: '#007AFF',
    fontWeight: '600',
  },
});

export { BottomNavigation }; 