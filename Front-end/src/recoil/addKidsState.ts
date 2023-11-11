import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

interface IAddKid {}

// TODO: Delete 불필요한듯?
export const addKidsState = atom<IAddKid>({
	key: 'addKids',
	default: [],
	effects_UNSTABLE: [persistAtom],
});
