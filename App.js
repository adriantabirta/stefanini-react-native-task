import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { getAllShifts } from "./src/api/shifts";
import { book } from "./src/api/book";
import { cancelBook } from "./src/api/book";

import MyShifts from "./src/components/MyShifts/MyShifts";
import AvailableShifts from "./src/components/AvailableShifts/AvailableShifts";

import convertTimestampsToDates from "./src/common/functions/convertTimestampsToDates";

export const AppContext = React.createContext();


const Tab = createBottomTabNavigator();

const onlyBookedShifts = item => item.booked === true;

export default () => {

  const [allShifts, setAllShifts] = React.useState([]);

  React.useEffect(() => {
    reloadData()
  }, [])

  reloadData = () => {
    getAllShifts().then(response => {
      setAllShifts(response.map(convertTimestampsToDates));
    })
  }

  const shiftsContext = React.useMemo(() => {
    return {
      bookShiftWithId: (id) => {
        book(id)
          .then(response => {
            reloadData()
          })
      },
      cancelShiftWithId: (id) => {

        cancelBook(id)
          .then(response => {
            reloadData()
          })
      }
    };
  }, []);

  return (<NavigationContainer>
    <AppContext.Provider value={shiftsContext}>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'My shifts') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'Available shifts') {
            iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: '#004fb4',
          inactiveTintColor: 'gray',
        }}>

        <Tab.Screen name="My shifts" component={() => (<MyShifts shifts={allShifts.filter(onlyBookedShifts)} />)} />
        <Tab.Screen name="Available shifts" component={() => (<AvailableShifts shifts={allShifts} />)} />
      </Tab.Navigator>
    </AppContext.Provider>
  </NavigationContainer>)
}