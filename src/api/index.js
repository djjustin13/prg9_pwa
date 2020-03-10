import endpoints from './endpoints';

const baseData = {
    // headers: {
    //     'Content-Type': 'application/json',
    // },
}

const API = {
    post: async (url, data = {}) => {
        const response = await fetch(endpoints.API_BASE_URL + url, { 
            ...baseData,
            method: 'POST',
            body: JSON.stringify(data)
        });
        return await response.json();
    },
    get: async (url) => {
        const response = await fetch(endpoints.API_BASE_URL + url, { 
            ...baseData,
            method: 'GET',
        });
        return await response.json();
    },
}

export default API