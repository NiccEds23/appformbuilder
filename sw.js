let cacheData="appV1";

const cacheAssets = [
    // '/iforms/idesign/getRegexJson',
    // '/iforms/idesign/getFormStateFromJson',
    // '/iforms/idesign/getDataObjects',
    '/manifest.json',
    '/deptiKUR/locales/en/translation/constants.json',
    '/deptiKUR/locales/en/styles/constants.json'
]

//console.log("cacheAssets",cacheAssets);
try {
    this.addEventListener("install", e => {
        e.waitUntil(
            caches.open(cacheData).then(cache => {
                cache.addAll(cacheAssets)
            })
        )
    })
    
} catch (error) {
    console.log(error);
}

this.addEventListener("fetch", (e) => {
    if(!navigator.onLine){
        e.respondWith(
            caches.match(e.request).then(resp => {
                if (resp){
                    return resp
                }
                let requestUrl = e.request.clone();
                fetch(requestUrl)
            })
        )
    }
})