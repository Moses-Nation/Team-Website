import fetch from 'node-fetch';

const loadloganurl = async () =>{

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://localhost:3000/logan', options);
    const testResponse = await apiResponse.text();
    //just a comment
    return testResponse;

};

export default loadloganurl;