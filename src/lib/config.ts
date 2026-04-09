// API Configuration
// TODO: Replace with your actual backend URL when connecting to Cloud
const rawApiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

const apiBaseUrlWithProtocol = /^https?:\/\//i.test(rawApiBaseUrl)
  ? rawApiBaseUrl
  : `https://${rawApiBaseUrl}`;

export const API_BASE_URL = apiBaseUrlWithProtocol.replace(/\/+$/, '');

// App Configuration
export const APP_NAME = 'William Pignatti';
export const APP_TAGLINE = '';
