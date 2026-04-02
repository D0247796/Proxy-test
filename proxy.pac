function FindProxyForURL(url, host) {
 
    if (url.indexOf("https://www.whatismyip.com") === 0) {
        return "PROXY 89.35.119.147:3128";
    }

    return "DIRECT";
}