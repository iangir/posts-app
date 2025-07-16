const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
	get: async <T>(url: string, params?: Record<string, string | number>): Promise<T> => {
		const query = params ? `?${new URLSearchParams(params as Record<string, string>)}` : '';
		const response = await fetch(`${BASE_URL}${url}${query}`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return response.json();
	},
};
