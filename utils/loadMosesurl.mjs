import fetch from 'node-fetch';

const loadMosesurl = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://localhost:3000/moses', options);
    const testResponse = await apiResponse.text();

    return testResponse;
};

export default loadMosesurl;