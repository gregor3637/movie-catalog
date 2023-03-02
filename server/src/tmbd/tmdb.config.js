const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);
  console.log("🚀 ~ file: tmdb.config.js:6 ~ getUrl ~ params:", params)

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };
