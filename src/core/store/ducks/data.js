
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	getDataApi: ['params'],
	successDataApi: [],
	errorDataApi: [],

	setPageType: ['params'],
	setFavorite: ['params']
});

const initialState = {
	data: null,
	loading: false,
	error: false,
	pageType: 'all'
};

/*GET PEOPLE*/
const getDataApi = (state = initialState, action) => {
	return {
		...state,
		loading: true,
		error: false
	}
};

const successDataApi = (state = initialState, action) => ({
	...state,
	data: action.response,
	loading: false,
	error: false
});

const errorDataApi = (state = initialState, action) => ({
	...state,
	data: [],
	loading: false,
	error: action.err
});

const setPageType = (state = initialState, action) => {
	return {
		...state,
		pageType: action.params
	}
};

const setFavorite = (state = initialState, action) => {
	return {
		...state,
		data: action.params
	}
};

export default createReducer(initialState, {
	[Types.GET_DATA_API]: getDataApi,
	[Types.SUCCESS_DATA_API]: successDataApi,
	[Types.ERROR_DATA_API]: errorDataApi,

	[Types.SET_PAGE_TYPE]: setPageType,
	[Types.SET_FAVORITE]: setFavorite,
});