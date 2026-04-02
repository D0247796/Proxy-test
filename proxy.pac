function FindProxyForURL(url, host) {
    // 指定完整網址
    if (url.indexOf("https://www.whatismyip.com") === 0) {
        return "PROXY 190.52.108.184:999";
    }

    return "DIRECT";
}