import { RootActionsType } from './../rootActionsTypes';
import { ALL_COM } from './commentsConst';
import { commentsArr } from '../commentsArr';
import { CommentsArr } from '../commentsArr';

export const comments = (state: CommentsArr[] = commentsArr, action: RootActionsType) => {
  switch (action.type) {
    case ALL_COM: {
      return state;
    }
    default: {
      return state;
    }
  }
};
