// Navigation types

export interface NavigationTab {
  id: string;
  title: string;
  icon: string;
  routeName: string;
}

export interface NavigationState {
  activeTab: string;
  tabs: NavigationTab[];
} 