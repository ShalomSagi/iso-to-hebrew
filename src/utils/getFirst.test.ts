import getFirst from "./getFirst"

test("getFirst util", () => {
  expect(getFirst("first,second")).toEqual("first")
  expect(getFirst("first ,second")).toEqual("first")
  expect(getFirst("hello-world", "-")).toEqual("hello")
  expect(getFirst("", "-")).toEqual("")
})
