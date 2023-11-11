import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

interface IParent {
	institution: string;
	name: string;
	birth: string;
	gender: string;
	isRegistered: boolean;
}

export const parentsState = atom<IParent>({
	key: 'parent',
	default: {
		institution: '',
		name: '',
		birth: '',
		gender: '',
		isRegistered: false,
	},
	effects_UNSTABLE: [persistAtom],
});
