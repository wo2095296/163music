/* eslint-disable */

import createApp from '../../../src/main';
const { app, router } = createApp();


describe('Plugin', () => {
    const vm = app.$mount();

    // pop plugin test 
    it('pop load', () => {
        expect(typeof vm.$pop !== undefined).to.be.equal(true);
    }) 

});