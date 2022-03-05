/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {add} from 'library'
AppRegistry.registerComponent(appName, () => App);
console.log(add());