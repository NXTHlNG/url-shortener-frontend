import axios from 'axios'

export const urlShortenerAPI = {
    async getShortUrl(longUrl) {
        console.log(longUrl)

        const res = await axios.post(`${process.env.REACT_APP_API_URL}`, {
                long_url: longUrl
            })
        ;

        return res.data;
    },

    async getLongUrl(shortUrl) {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}${shortUrl}`);

        return res.data;
    },
}