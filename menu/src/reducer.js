import menu from './data';

export const initialState = {
  items: menu,
};
export const getCategories = () => {
  return ['All', ...new Set(menu.map((item) => item.category))];
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_MENU':
      if (action.category === 'All') return { ...state, items: menu };
      return {
        ...state,
        items: menu.filter((item) => item.category === action.category),
      };
    default:
      return state;
  }
};

export default reducer;
