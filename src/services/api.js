import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '97a728d5e36b3098a7641152faaa0175';
const REQUEST_TREND = 'trending/movie/day';
const REQUEST_DETAILS = 'movie/';
const REQUEST_SEARCH = 'search/movie';

function fetchTrend() {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: '1',
    include_adult: false,
    per_page: '20',
  });

  return axios
    .get(`${BASE_URL}${REQUEST_TREND}?${params}`)
    .then(({ data }) => data);
}

function fetchSearch(query) {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
    query: query,
    page: '1',
  });

  return axios
    .get(`${BASE_URL}${REQUEST_SEARCH}?${params}`)
    .then(({ data }) => data);
}

function fetchDetails(id) {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios
    .get(`${BASE_URL}${REQUEST_DETAILS}/${id}?${params}`)
    .then(({ data }) => data);
}

function fetchCast(id) {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios
    .get(`${BASE_URL}${REQUEST_DETAILS}/${id}/credits?${params}`)
    .then(({ data }) => data);
}

function fetchReview(id) {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios
    .get(`${BASE_URL}${REQUEST_DETAILS}/${id}/reviews?${params}`)
    .then(({ data }) => data);
}

export { fetchTrend, fetchSearch, fetchDetails, fetchCast, fetchReview };
