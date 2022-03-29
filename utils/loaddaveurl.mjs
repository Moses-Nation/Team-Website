import fetch from 'node-fetch';

const daveurl = async ()=>{

    const options = {
        method: 'GET',
        headers: {'Content-Type':'aplication/json'}
    };

    const apiResponse = await fetch ('http:///dave', options)
    const testResponse = await apiResponse.text();

    return testResponse;

};

export default daveurl;