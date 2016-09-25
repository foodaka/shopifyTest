import {
  FETCH_SHOPIFY_API,
  FETCH_SHOPIFY_API_SUCCESS,
  FETCH_SHOPIFY_API_FAIL
} from './const';


const initialState = {
  data:[]
}


export default function reducer(state=initialState , action){
  switch(action.type){
    case FETCH_SHOPIFY_API_SUCCESS:
      let newState = Object.assign({},state)
        newState.data = action.payload;
      return newState;

    case FETCH_SHOPIFY_API_FAIL:
        alert('oops something went wrong fetching API')
        return state;
      }
  return state
}
