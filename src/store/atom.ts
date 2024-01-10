import { atom } from 'recoil';

export const isDarkAtom = atom<boolean>({
  key: `darkMode`,
  default: false,
});

export const isHeaderStyleAtom = atom<boolean>({
  key: `headerStyle`,
  default: false,
});
