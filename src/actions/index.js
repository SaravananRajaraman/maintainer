import * as types from './ActionTypes';
import data from './RepoFolders.json';

export const changeLoading =()=> dispatch => dispatch({type: types.CHANGE_LOADING});


export const getRepos = () => async(dispatch) => {           
    dispatch({type : types.GET_REPOS, repos : data.Response});
}
