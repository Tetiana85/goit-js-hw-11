import axios from 'axios';

export class PixabayAPI {
  #API_KEY = '40490498-6cd0521e1942b4167d883a306';
  #BASE_URL = 'https://pixabay.com/api/';

  baseSearchParams = {
    key: this.#API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  };

  constructor() {
    this.query = '';
    this.page = 1;
  }

  async fetchHits() {
    const searchParams = new URLSearchParams({
      ...this.baseSearchParams,
      q: this.query,
      page: this.page,
    });

    const response = await axios.get(`${this.#BASE_URL}?${searchParams}`);
    return response;
  }

  restPage() {
    this.page = 1;
  }
}