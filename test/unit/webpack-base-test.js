const path = require('path');
const assert = require('assert');


describe("webpack.base.js test case", ()=>{
    const baseConfig = require('../../lib/webpack.base');
    console.log(baseConfig,"config ");
    it('entry', ()=>{
        assert.equal(baseConfig.entry.index,"C:/Users/cpfzo/Desktop/demo/webpack-item1/builder-webpack/test/smoke/template/src/index/index.js");
        assert.equal(baseConfig.entry.search,"C:/Users/cpfzo/Desktop/demo/webpack-item1/builder-webpack/test/smoke/template/src/search/index.js");
    })
})