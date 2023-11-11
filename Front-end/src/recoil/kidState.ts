import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const kidState = atom({
	key: 'kid',
	default: {
		institution: '',
		name: '',
		birth: '',
		isRegistered: false,
	},
	effects_UNSTABLE: [persistAtom],
});
