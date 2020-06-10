import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {SearchScreen} from './src/screens'

const navigator = createStackNavigator({
    Search: SearchScreen
  }, {
  intitialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);