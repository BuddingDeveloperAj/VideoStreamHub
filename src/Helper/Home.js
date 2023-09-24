import { YOUTUBE_API } from "../Utils/config";

export const Home = async (page = "") => {
    try {
        let PopularUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=48&chart=mostPopular&regionCode=IN${page ? '&pageToken=' + page : ''}&key=` + YOUTUBE_API
        let response = await fetch(PopularUrl);
        let jsonData = await response.json();
        return jsonData
    } catch (error) {
        console.error('Error fetching data:', error);
    }
} 
