import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {SearchScreen, ResultShowScreen} from './src/screens'

const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultShow: ResultShowScreen
  }, {
  intitialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);