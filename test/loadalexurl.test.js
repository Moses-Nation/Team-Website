import loadalexurl from '../utils/loadalexurl.mjs';
import assert from 'assert';


it("Tests Alex URL Endpoint", async ()=>{

    const urlResponse = await loadalexurl();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello Alex");
});