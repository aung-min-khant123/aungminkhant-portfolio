import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
    try {
        const saved = localStorage.getItem('theme');
        return saved === 'dark' ? 'dark' : 'light';
    } catch (e) {
        return 'light';
    }
};

const themeSlice = createSlice({
    name: "theme",
    initialState: getInitialTheme(),
    reducers: {
        toggleTheme: (state) => (state === "light" ? "dark" : "light")
    },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;