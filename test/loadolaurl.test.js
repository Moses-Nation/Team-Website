import loadolaurl from '../utils/loadolaurl.mjs';
import assert from 'assert';


it("Tests ola URL Endpoint", async ()=>{

    const urlResponse = await loadolaurl();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello ola");
});