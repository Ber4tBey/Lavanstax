const rp = require('request-promise');
const tough = require('tough-cookie');

USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) \
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"

async function get_token(dc = NaN, key = NaN) {
    const cookiejar = rp.jar();
    cookiejar.setCookie(new tough.Cookie({
		key: 'sp_dc',
		value: dc,
		domain: 'open.spotify.com',
	}).toString(), 'https://open.spotify.com');
    cookiejar.setCookie(new tough.Cookie({
		key: 'sp_key',
		value: key,
		domain: 'open.spotify.com',
	}).toString(), 'https://open.spotify.com');

    var options = {
        url: "https://open.spotify.com/get_access_token?reason=transport&productType=web_player",
        headers: {
            'User-Agent': USER_AGENT
        },
        jar: cookiejar,
        json: true
    };
    
    return rp(options);
}

exports.getAccessToken = async function(dc = NaN, key = NaN) {
    sonuc = await get_token(dc, key);
    return sonuc;
};


