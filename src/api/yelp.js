import axios from 'axios'

export default axios.create({
    baseURL: 'GET https://api.yelp.com/v3/businesses',
    header: {
        Authorization: 'Bearer pFaelJe6Y5nCntVuSxAuBX4XmJ9D9JKzIOnxVcIfWt2n1KsJyqmjLWo0TgI9GBJYhO1_xHjy_IaTup35wKg8FPB5r75NjuVBm3m5XMUW3Gz8qkgsO89nxTYmmqjfXnYx'
    }
});