import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Add, Archive, Creator, Home, Search } from '..';
import { AddBoxFocused, AddBoxRegular, ArchiveFocused, ArchiveRegular, CreatorFocused, CreatorRegular, HomeFocused, HomeRegular, SearchFocused, SearchRegular } from '../../assets/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const Main = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return !focused ? (
            route.name == 'Home' ?    <HomeRegular width={24} height={24} /> : 
            route.name == 'Search' ?  <SearchRegular width={22} height={18} /> :
            route.name == 'Add' ?     <AddBoxRegular width={23} height={23} /> :
            route.name == 'Archive' ? <ArchiveRegular width={19} height={15} /> :
                                      <CreatorRegular width={18} height={18} />
          ) : (
            route.name == 'Home' ?    <HomeFocused width={24} height={24} /> : 
            route.name == 'Search' ?  <SearchFocused width={22} height={18} /> :
            route.name == 'Add' ?     <AddBoxFocused width={23} height={23} /> :
            route.name == 'Archive' ? <ArchiveFocused width={19} height={15} /> :
                                      <CreatorFocused width={18} height={18} />
          )
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: () => null,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          height: 40 + insets.bottom,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Archive" component={Archive} />
      <Tab.Screen name="Creator" component={Creator} />
    </Tab.Navigator>
  );
};

export default Main;
