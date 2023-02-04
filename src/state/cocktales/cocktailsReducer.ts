import cocktailsArr from '../cocktailsArr';
import { RootActionsType } from '../rootActionsTypes';
import {
  STR_ALK_FILTER,
  HOME,
  LOW_ALK_FILTER,
  NON_ALK_FILTER,
} from './cocktailsConst';



export const cocktails = (state = cocktailsArr, action: RootActionsType) => {
  switch (action.type) {
    case STR_ALK_FILTER: {
      return cocktailsArr.filter((item) => item.class === 'strong-alcohol');
    }
    case LOW_ALK_FILTER: {
      return cocktailsArr.filter((item) => item.class === 'low_alk');
    }
    case NON_ALK_FILTER: {
      return cocktailsArr.filter((item) => item.class === 'non_alk');
    }
    case HOME: {
      return (state = cocktailsArr);
    }
    default: {
      return state;
    }
  }
};
