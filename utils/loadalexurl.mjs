import fetch from 'node-fetch';

const loadalexurl = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://34.135.17.150/alex', options);
    const testResponse = await apiResponse.text();

    return testResponse;
};

export default loadalexurl;