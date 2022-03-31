import fetch from 'node-fetch';

const loadolaurl = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://108.59.87.120/moses', options);
    const testResponse = await apiResponse.text();

    return testResponse;
};

export default loadolaurl;