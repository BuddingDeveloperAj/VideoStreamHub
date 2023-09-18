import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        isMainSideBar: true,
    },
    reducers: {
        mainSideBarToggle: (store) => {
            store.isMainSideBar = !store.isMainSideBar
        }
    }
})


export const { mainSideBarToggle, watchSideBarToggle } = appSlice.actions
export default appSlice.reducer