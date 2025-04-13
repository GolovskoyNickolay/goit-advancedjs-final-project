const searchQueryParams = {
  initParams: new URLSearchParams(window.location.search),

  set(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    this.update(urlParams);
  },
  new(key, value) {
    const urlParams = new URLSearchParams();
    urlParams.set(key, value);
    this.update(urlParams);
  },
  get(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  },
  delete(key) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.delete(key);
    update(urlParams);
  },

  update(urlParams) {
    if (history.pushState) {
      const newurl =
        window.location.protocol +
        '//' +
        window.location.host +
        window.location.pathname +
        '?' +
        urlParams.toString();
      window.history.pushState({ path: newurl }, '', newurl);
    }
  },
};
export default searchQueryParams;
