# Acescore Weather Dashboard

A responsive weather dashboard built with React, TypeScript, and Vite, using OpenWeatherMap API to fetch real-time weather data. It features Redux Toolkit for state management, search history, and handles loading & error states.

## 🚀 Features

- **City-based search**  
  - Look up current weather information by city name.
- **Redux Toolkit + Async Thunks**  
  - Fetch weather data and manage application state.
- **Search history**  
  - Displays cities you've searched for without duplicates.
- **Loading & Error Handling**  
  - Displays feedback during data fetch or error scenarios.
- **TypeScript**  
  - Enforces strong typing for safer and more predictable code.
- **Vite**  
  - Lightning-fast development build system.

  
## 🛠 Tech Stack

- React + TypeScript (via Vite)
- Redux Toolkit with `createSlice` and `createAsyncThunk`
- Axios for API requests
- Bootstrap (for styling)
- ESLint for maintaining consistent code style

## 📂 Project Structure

- `src/`
  - `app/`
    - `store.ts` – Redux store configuration
  - `features/`
    - `weather/`
      - `weatherSlice.ts` – State, thunk, reducers
      - `Weather.tsx` – Weather display component
  - `components/`
    - `SearchBar.tsx` – City search input
  - `hooks.ts` – Typed Redux hooks
  - `App.tsx` – Main app component
  - `main.tsx` – Entry point (Bootstrap CSS import here)

