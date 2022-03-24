import fetch from 'node-fetch';

const loodloganurl = async () => {

    const option = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    },

    const apiResponse = await fetch('http://localhost:3000/logan', option);
    const apiResponse = await apiResponse.text();

    return loginResponse;
}

export loodloganurl;