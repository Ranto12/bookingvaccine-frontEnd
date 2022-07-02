import api from '../data/post';

export const handlePutNews = () => {
    try {
        const response = await api.post(`/news/${id}`)
        setJadwal(response.data);
    } catch (err) {
        if (err.response) {
            //not in the 200 response range
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else {
            console.log(`Error ${err.message}`);
        }
    }
}