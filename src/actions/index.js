import * as types from './ActionTypes';

const Repos = ['repo1','repo2','repo3'];

const BitRepo = 'https://api.bitbucket.org/2.0/repositories/sakthivel434/';

const File = '/src/master/package.json';

export const changeLoading =()=> dispatch => dispatch({type: types.CHANGE_LOADING});


export const getRepos = () => async(dispatch) => { 

    await Repos.forEach(repo => {fetch(BitRepo +  repo + File)
    .then(Response => Response.json()) 
    .then(data => dispatch({type : types.GET_REPOS, repos : data.Response}))
     });
}
