const { MarkovMachine } = require("./markov");
const fs = require("fs");

describe("MarkovMachine", function () {
  let mm;
  let text;
  beforeEach(function () {
    text = "the cat in the hat";
    mm = new MarkovMachine(text);
  });

  test("makeChains", function () {
    expect(mm.chains).toEqual(
      new Map([
        ["the", ["cat", "hat"]],
        ["cat", ["in"]],
        ["in", ["the"]],
        ["hat", [null]],
      ])
    );
  });

  test("makeText", function () {
    let output = mm.makeText();
    expect(output.split(" ").length).toEqual(100);
  });

  test("makeText with numWords", function () {
    let output = mm.makeText(5);
    expect(output.split(" ").length).toEqual(5);
  });

  test("return an array of words", function () {
    let output = mm.makeText(5);
    expect(output.split(" ")).toEqual(expect.any(Array));
  });
});
