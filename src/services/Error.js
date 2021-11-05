import _  from 'lodash'

export const handleError = (error) => {
	switch (error.name) {
		case 'TypeError':
			if (error.message === 'Failed to fetch') {
				return { code: 'NetworkError' };
			} else {
				return { code: 'unknown_error' };
			}
		default:
			return _.merge({ code: 'unknown_error' }, { code: _.get(error, 'code'), message: _.get(error, 'message') });
	}
};
