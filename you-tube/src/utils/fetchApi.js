import axios from 'axios'



const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {

    url: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '7f4d4de38dmsh745c6516b2556edp14857ejsn11316b73c0ee',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
