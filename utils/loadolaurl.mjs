import fetch from 'node-fetch';

const loadolaurl = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://35.223.19.89/ola', options);
    const testResponse = await apiResponse.text();

    return testResponse;
};

export default loadolaurl;