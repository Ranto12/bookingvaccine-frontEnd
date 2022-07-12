import jwt_decode from 'jwt-decode';

const Decode = () => {
    const token = localStorage.getItem('token');
    const decode = jwt_decode(token);
    console.log("decode", decode);
}

export default Decode