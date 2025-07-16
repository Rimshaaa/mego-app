import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActiveOrders from './active';
import ScheduledOrders from './scheduled';
import ExpiredOrders from './expired';

const Tab = createMaterialTopTabNavigator();

export default function OrdersTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Active" component={ActiveOrders} />
      <Tab.Screen name="Scheduled" component={ScheduledOrders} />
      <Tab.Screen name="Expired" component={ExpiredOrders} />
    </Tab.Navigator>
  );
}
