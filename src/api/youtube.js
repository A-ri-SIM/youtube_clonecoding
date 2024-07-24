export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async sameChannelVideo(id) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          channelId: id,
          maxResults: 25,
          order: 'date',
          type: 'video',
          sameChannelVideoId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async commentThreads(videoId) {
    return this.apiClient
      .commentThreads({
        params: { part: 'snippet', videoId, maxResults: 50, order: 'time' },
      })
      .then((res) => res.data.items);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
          regionCode: 'KR',
        },
      })
      .then((res) => res.data.items);
  }
}
