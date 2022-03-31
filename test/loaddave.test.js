import loaddaveurl from '../utils/loaddaveurl.mjs';
import assert from 'assert';

it("Tests Dave URL Endpoint", async ()=>{

    const urlResponse = await loaddaveurl();
    console.log("URL Response:")+urlResponse;
    assert.equal(urlResponse, "Hello Dave!");
});