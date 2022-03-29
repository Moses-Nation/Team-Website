import loadMosesurl from '../utils/loadMosesurl.mjs';
import assert from 'assert';


it("Tests Moses URL Endpoint", async ()=>{

    const urlResponse = await loadMosesurl();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello Moses");
});