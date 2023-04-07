import { createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { CocktalesArr } from '../cocktailsArr';
import coctailsArr from '../cocktailsArr';


interface InitialState {
  data: CocktalesArr[],
  isLoading: boolean,
  error: string | null,
}

const toolkitSlice = createSlice({
  name: 'cocktails',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  } as InitialState ,
  reducers: {
    fetchPostsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchPostsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    setStrAlk: (state): any => {
      console.log(state.data)
      const filteredItem =  state.data.filter((item) => item.class === 'strong-alcohol');
      console.log(filteredItem)
      return {
        ...state, data: filteredItem
      }
    },

    setLowAlk: (state): any => {
      return state.data.filter((item) => item.class === 'low_alk');
    },

    setNonAlk: (state): any => {
      return state.data.filter((item) => item.class === 'non_alk');
    },

    setHome: (state) => {
      state.data = state.data;
    },
  
  },
});

export const fetchCocktails: any = () => async (dispatch: any) => {
  dispatch(toolkitSlice.actions.fetchPostsRequest());
    try {
    const response = await axios.get('/cocktails');
    //dispatch(setCocktails(response.data));
    dispatch(toolkitSlice.actions.fetchPostsSuccess(response.data));
  } catch (error) {
    dispatch(toolkitSlice.actions.fetchPostsFailure(error));
  }
};

const allAlk = (state: any) => state.data



export const strongAlk = createSelector([allAlk], (allAlk) => {
  console.log('selector runned')
  return allAlk.filter((item: any) => item.class === 'strong-alcohol');
})

export default toolkitSlice.reducer;
export const {setStrAlk, setLowAlk, setNonAlk, setHome, fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure} = toolkitSlice.actions
