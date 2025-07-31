# React Weather App

A weather application built with React that displays current weather information and forecasts based on user location.

Visit here: https://mylocalweather.vercel.app/

## 🚀 Features

- Display current weather based on GPS location
- 7-day weather forecast
- Detailed information: temperature, humidity, wind speed, UV index, air quality
- Sunrise and sunset times
- Responsive design
- City search functionality (in progress)

## 🛠️ Technologies Used

- **React** 19.1.0
- **Vite** 7.0.4
- **TailwindCSS** 4.1.11
- **Axios** 1.11.0
- **OpenWeatherMap API**

## 📋 System Requirements

- Node.js 18.0.0 or higher
- npm or yarn

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd react-weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment setup

Create a `.env` file in the root directory and add your API key:

```env
VITE_API_BASE_URL=https://api.openweathermap.org/
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

### 4. Run the development server

```bash
npm run dev
```

The application will run at: `http://localhost:5173`
