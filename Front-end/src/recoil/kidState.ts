import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

interface IKid {
	institution: string;
	name: string;
	birth: string;
	isRegistered: boolean;
}

export const kidState = atom<IKid>({
	key: 'kid',
	default: {
		institution: '',
		name: '',
		birth: '',
		isRegistered: false,
	},
	effects_UNSTABLE: [persistAtom],
});
