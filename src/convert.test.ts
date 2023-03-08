import isoToHebrew from "./convert"

describe("Covert language codes to Hebrew names", () => {
  test("Hebrew", () => {
    expect(isoToHebrew("he")).toBe("עברית")
  })
  test("English", () => {
    expect(isoToHebrew("en")).toBe("אנגלית")
  })
  test("Spanish", () => {
    expect(isoToHebrew("es")).toBe("ספרדית")
  })
  test("French", () => {
    expect(isoToHebrew("fr")).toBe("צרפתית")
  })
  test("First Language", () => {
    expect(isoToHebrew("ab")).toBe("אבחזית")
  })
  test("Last Language", () => {
    expect(isoToHebrew("zu")).toBe("זולו")
  })
})
