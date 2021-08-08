import { Appearance } from 'react-native';
import GlobalStore from 'react-native-global-state-hooks';

const ColorScheme = new GlobalStore(Appearance.getColorScheme());

export const useColorScheme = ColorScheme.getHook();