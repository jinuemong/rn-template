import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Navigation1Page, Navigation2Page, Navigation3Page, Navigation4Page, Navigation5Page } from '@/pages';
import { BottomNavigation, TabItem } from '@/widgets';

const tabs: TabItem[] = [
  {
    id: 'navigation1',
    title: '탭 1',
    icon: '1️⃣',
    component: Navigation1Page,
  },
  {
    id: 'navigation2',
    title: '탭 2',
    icon: '2️⃣',
    component: Navigation2Page,
  },
  {
    id: 'navigation3',
    title: '탭 3',
    icon: '3️⃣',
    component: Navigation3Page,
  },
  {
    id: 'navigation4',
    title: '탭 4',
    icon: '4️⃣',
    component: Navigation4Page,
  },
  {
    id: 'navigation5',
    title: '탭 5',
    icon: '5️⃣',
    component: Navigation5Page,
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('navigation1');

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
  };

  const renderActiveComponent = () => {
    const activeTabData = tabs.find(tab => tab.id === activeTab);
    if (!activeTabData) return null;
    
    const Component = activeTabData.component;
    return <Component />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {renderActiveComponent()}
      </View>
      <BottomNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
});

export { App };
export default App; 