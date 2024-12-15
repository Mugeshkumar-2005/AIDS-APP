import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import TaskManagementScreen from './screens/TaskManagementScreen';
import BookScreen from './screens/BookScreen';
import ReportsScreen from './screens/ReportsScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ViewStaff from './screens/pages/ViewStaff';
import Contact from './screens/pages/Contact';
import AdminDashboard from './screens/admin/AdminDashboard';
import AdminAttendance from './screens/admin/AdminAttendance';
import AdminStudent from './screens/admin/AdminStudent';
import AdminStaff from './screens/admin/AdminStaff';
import AdminNotifications from './screens/admin/AdminNotification';
import AdminHome from './screens/admin/adminpages/AdminHome';
import AdminDepartment from './screens/admin/adminpages/AdminDepartment';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown:false}} />
        <Stack.Screen name="TaskManagement" component={TaskManagementScreen} />
        <Stack.Screen name="Book" component={BookScreen}/>
        <Stack.Screen name="Reports" component={ReportsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="ViewStaff" component={ViewStaff}/>
        <Stack.Screen name="Contact" component={Contact}/>
        <Stack.Screen name="AdminDashboard" component={AdminDashboard}  options={{headerShown:false}}/>
        <Stack.Screen name="AdminAttendance" component={AdminAttendance}/>
        <Stack.Screen name="AdminStudent" component={AdminStudent}/>
        <Stack.Screen name="AdminStaff" component={AdminStaff}/>
        <Stack.Screen name="AdminNotifications" component={AdminNotifications}/>
        <Stack.Screen name="AdminHome" component={AdminHome}/>
        <Stack.Screen name="AdminDepartment" component={AdminDepartment}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}