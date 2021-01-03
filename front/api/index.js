// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api'

const logRequests = !!process.env.DEBUG_API

const api = createAPI({
  version: '/v0',
  config: {
    apiKey: "AIzaSyC8NO9NJBC40EHO9moLcYAlG1kSoihYkRc",
    authDomain: "comento-feed.firebaseapp.com",
    projectId: "comento-feed",
    storageBucket: "comento-feed.appspot.com",
    messagingSenderId: "865515099376",
    appId: "1:865515099376:web:8fffc2409c6424a43cde35",
    measurementId: "G-XJNL4FZ7G1"
  }
})

// warm the front page cache every 15 min
// make sure to do this only once across all requests
if (api.onServer) {
  warmCache()
}

function warmCache() {
  fetchPosts((api.cachedIds.top || []).slice(0, 30))
  setTimeout(warmCache, 1000 * 60 * 15)
}

function fetch(child) {
  logRequests && console.log(`fetching ${child}...`)
  const cache = api.cachedItems
  if (cache && cache.has(child)) {
    logRequests && console.log(`cache hit for ${child}.`)
    return Promise.resolve(cache.get(child))
  } else {
    return new Promise((resolve, reject) => {
      api.child(child).once('value', snapshot => {
        const val = snapshot.val()
        // mark the timestamp when this item is cached
        if (val) val.__lastUpdated = Date.now()
        cache && cache.set(child, val)
        logRequests && console.log(`fetched ${child}.`)
        resolve(val)
      }, reject)
    })
  }
}


export function fetchPost(id) {
  return fetch(`view/${id}`)
}

export function fetchPosts(ids) {
  return Promise.all(ids.map(id => fetchPost(id)))
}

export function fetchSearch(id) {
  return fetch(`search/${id}`)
}
