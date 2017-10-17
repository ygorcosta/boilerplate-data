/**
 * Todo React Native App using WeDeploy's Data service
 * @flow
 */

import {
  StackNavigator
} from 'react-navigation';

import AddItems from './pages/add-items';
import ListItems from './pages/list-items';

const App = StackNavigator({
  AddItems: { screen: AddItems },
  ListItems: { screen: ListItems }
});

export default App;
