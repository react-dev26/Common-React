if (typeof Raven !== 'undefined') {
  Raven.config('https://519150b09f7d403282e736aeda4e9452@app.getsentry.com/93003').install()
  Raven.setTagsContext({ environment: "production" });
}
