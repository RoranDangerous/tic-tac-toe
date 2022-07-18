const tokenKey = 'tic-tac-toe-token';
const playerKey = 'tic-tac-toe-player';

export const getToken = () => localStorage.getItem(tokenKey) ?? '';
export const setToken = (token: string) => localStorage.setItem(tokenKey, token);
export const getPlayer = () => localStorage.getItem(playerKey) ?? '';
export const setPlayer = (name: string) => localStorage.setItem(playerKey, name);