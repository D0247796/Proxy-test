function FindProxyForURL(url, host) {
 
    if (url.indexOf("https://www.whatismyip.com") === 0) {
        return "PROXY 168.222.254.26:8888";
    }
	
	if (url.indexOf("http://ip-check.info") === 0) {
        return "PROXY 168.222.254.26:8888";
    }

    return "DIRECT";
}