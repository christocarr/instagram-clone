const initialState = {
  theme: 'light',
};

export default function themeReducer(state = initialState, action) {
  if (action.type === 'TOGGLE_THEME') {
    return {
      ...state,
      theme: action.payload,
    };
  }
  return state;
}
