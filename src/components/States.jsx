import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

export const searchValue = atom({
    key: 'searchValue', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

export const selectedOne = atom({
    key: 'selectedOne',
    default: '',
});

export const scrollPos = atom({
    key: 'scrollPos',
    default: 0,
});

export const inputVar = atom({
    key: 'inputVariable',
    default: '',
});

export const selectedIDList = atom({
    key: 'selectedIDList',
    default: [],
});

export const resultVar = atom({
    key: 'fetchedDataResult',
    default: null,
});

export const resVar = atom({
    key: 'resVar',
    default: null,
})

export const GuitarsWithSongsVar = atom({
    key: 'GuitarsWithSongsVar',
    default: null,
})