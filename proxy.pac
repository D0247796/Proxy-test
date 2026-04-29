function FindProxyForURL(url, host) {
 
    if (url.indexOf("https://www.whatismyip.com") === 0) {
        return "PROXY 212.58.132.5:8888";
    }
	
    if (url.indexOf("https://ip-check.info") === 0) {
        return "PROXY 212.58.132.5:8888";
    }

    return "DIRECT";
}