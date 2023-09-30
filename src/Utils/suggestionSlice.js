import { createSlice } from "@reduxjs/toolkit";

const SuggestionSlice = createSlice({
    name: "Suggestion",
    initialState: {
        suggestions: {}
    },
    reducers: {
        addSuggestion: (store, action) => {
            const entries = Object.entries(store.suggestions);
            if (entries.length > 200) {
                entries.shift();
                store = Object.fromEntries(entries);
            }

            store.suggestions = { ...store.suggestions, ...action.payload }
        }
    }
})

export const { addSuggestion } = SuggestionSlice.actions

export default SuggestionSlice.reducer