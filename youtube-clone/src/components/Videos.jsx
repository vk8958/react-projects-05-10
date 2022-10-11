import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";


const Videos = () => {
    const [videos, setVideos] = useState([]);

    const callAPI = async () => {

        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                relatedToVideoId: '7ghhRHRP6t4',
                part: 'id,snippet',
                type: 'video',
                maxResults: '50'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        }

        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });
        const { data } = await axios.get("https://youtube-v31.p.rapidapi.com/search", options);
        console.log(data)
    }
    useEffect(() => {
        console.log(process.env.REACT_APP_API_KEY)
        callAPI()

    }, [])


    return (
        <div>
            Videos
        </div>
    )
}

export default Videos;