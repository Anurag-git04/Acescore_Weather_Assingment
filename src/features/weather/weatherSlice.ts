import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
  history: WeatherData[];
}


const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  history: [],
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${RAPIDAPI_KEY}`
      );
      console.log("Response:",response.data);
      const obj = {location:{
            name:response.data.name,
            region:response.data.sys.region,
            country:response.data.sys.country},
        current:{
                temp_c:response.data.main.temp,
                humidity:response.data.main.humidity,
                condition:{text:response.data.weather[0].description,
                icon:response.data.weather[0].icon}
            }};
            console.log("Object:",obj);
      return obj;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.history = [...new Set([action.payload, ...state.history])];
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;
