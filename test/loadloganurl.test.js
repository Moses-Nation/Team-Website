import loadloganurl from '../utils/loadloganurl.mjs';
import assert from 'assert';


it("Tests Logan URL Endpoint", async ()=>{

    const urlResponse = await loadloganurl();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello Logan");
});