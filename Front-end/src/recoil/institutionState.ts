import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface IInstitution {
	id: string;
	password: string;
	isLogin: boolean;
	name: string;
}

export const institutionState = atom<IInstitution>({
	key: 'institution',
	default: {
		id: '',
		password: '',
		isLogin: false,
		name: '',
	},
	effects_UNSTABLE: [persistAtom],
});
