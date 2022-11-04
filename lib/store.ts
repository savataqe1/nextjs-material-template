import { atom } from 'recoil';
import { ScreenModeType } from './types';

export const screenModeState = atom<ScreenModeType>({
	key: 'sceen/mode',
	default: 'dark'
})
