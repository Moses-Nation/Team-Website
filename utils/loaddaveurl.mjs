import fetch from 'node-fetch';

const daveurl = async ()=>{

    const options = {
        method: 'GET',
        headers: {'Content-Type':'aplication/json'}
    };

    const apiResponse = await fetch ('http://34.68.210.164/dave', options)
    const testResponse = await apiResponse.text();

    return testResponse;

};

export default daveurl;