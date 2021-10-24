export const toggleTheme = () => (dispatch, getState) => {
  const { theme } = getState().theme;
  const newTheme = theme === 'light' ? 'dark' : 'light';
  dispatch({
    type: 'TOGGLE_THEME',
    payload: newTheme,
  });
};
