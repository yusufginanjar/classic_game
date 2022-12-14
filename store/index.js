import { configureStore } from '@reduxjs/toolkit';
import { statusReducer } from './statusSlice';
import { loginReducer } from './loginSlice';
import { authReducer } from './authSlice';
import { gameReducer } from './gameSlice';
import { gamesReducer } from './gamesSlice';
import { createWrapper } from 'next-redux-wrapper';

export const store = configureStore({
  reducer: {
    status: statusReducer,
    login: loginReducer,
    auth: authReducer,
    game: gameReducer,
    games: gamesReducer
  },});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);