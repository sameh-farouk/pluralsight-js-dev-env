import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe("Our First Test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  })
})
describe("check index.html", () => {
  it("should say Hello, Sameh", (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0]
      expect(h1.innerHTML).to.equal("Hello, Sameh");
      done();
      window.close();
    });

  })
})
