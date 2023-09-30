const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API

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

export const SearchAPI = async (query) => {
    try {
        const youtubeSearchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${query}&key=${YOUTUBE_API}`
        let data = await fetch(youtubeSearchURL)
        let jsonData = await data.json()
        return jsonData
    } catch (error) {
        console.log("Error ", error.message)
    }
}


export const ChannelData = async (id) => {
    try {
        const youtubeChannelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=` + YOUTUBE_API
        const data = await fetch(youtubeChannelUrl)
        const jsonData = await data.json()
        return jsonData
    } catch (error) {
        console.log("Error", error)
    }
}

export const getVideoComments = async (id, page = "") => {
    try {
        const youtubeCommentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&${page ? 'pageToken=' + page + '&' : ''}maxResults=48&videoId=${id}&key=` + YOUTUBE_API
        const data = await fetch(youtubeCommentUrl)
        const jsonData = await data.json()
        return jsonData
    } catch (error) {
        console.log("Error", error)
    }
}

export const getVideoDetails = async (id) => {
    try {
        const youtubeVideoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=` + YOUTUBE_API
        const data = await fetch(youtubeVideoDetailsUrl)
        const jsonData = await data.json()
        return jsonData
    } catch (error) {
        console.log("Error", error)
    }
}

export const getVideoSuggestions = async (channelId) => {
    try {
        const youtubeVideoSuggestionUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId=${channelId}&maxResults=25&key=` + YOUTUBE_API
        const data = await fetch(youtubeVideoSuggestionUrl)
        const jsonData = await data.json()
        return jsonData
    } catch (error) {
        console.log("Error", error)
    }
}

export const getLiveChat = async (chatId, page) => {
    try {
        const youtubeLiveChatUrl = `https://youtube.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${chatId}&part=snippet%2CcontentDetails%2Cstatistics&maxResults=25&${page ? 'pageToken=' + page + '&' : ''}&key=` + YOUTUBE_API
        const data = await fetch(youtubeLiveChatUrl)
        const jsonData = await data.json()
        return jsonData
    } catch (error) {
        console.log("Error", error)
    }
}

