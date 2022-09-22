import { atom } from 'recoil';

export const formState = atom({
	key: 'formState',
	default: [
		{
			parameter: '',
			type: '',
			value: '',
			pairs: [],
		},
	],
});

export const fileState = atom({
	key: 'fileState',
	default: false,
});

export const fileUriState = atom({
	key: 'fileUriState',
	default: false,
});

export const jsonState = atom({
	key: 'jsonState',
	default: [
		{
			parameter: '',
			type: '',
			value: '',
			pairs: [],
		},
	],
});

export const isLoading = atom({
	key: 'isLoading',
	default: false,
});

export const hashCode = atom({
	key: 'hashCode',
	default: [
		{
			hash: '',
		},
	],
});
