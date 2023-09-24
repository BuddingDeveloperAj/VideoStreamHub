import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        isMainSideBar: true,
        videos: [],
        pageToken: ""
    },
    reducers: {
        mainSideBarToggle: (store) => {
            store.isMainSideBar = !store.isMainSideBar
        },
        setVideos: (store, action) => {
            let data = action.payload.items
                .filter((x) => {
                    x.videoId = (x?.id && x.id.videoId) || (x.id);
                    const isVideo = ((x?.kind === "youtube#video") || (x.id && x.id.kind === "youtube#video")) && x.videoId;
                    return isVideo;
                });

            if (store.videos.length > 200) {
                store.videos = store.videos.splice(0, 48)
            }
            store.pageToken = action.payload.nextPageToken
            store.videos = [...store.videos, ...data];
        },
    }
})


export const { mainSideBarToggle, setVideos } = appSlice.actions
export default appSlice.reducer