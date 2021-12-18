import { parseDbUrl, startApp, street, streetName } from "../4_either_practice";

describe("Either", () => {
  const user = { address: { street: { name: "Willow" } } };
  const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}';

  it("1: street", () => {
    expect(street(user)).toMatchObject({ name: "Willow" });
    expect(street({})).toBe("no street");
  });

  it("1b: streetName", () => {
    expect(streetName(user)).toBe("Willow");
    expect(streetName({})).toBe("no street");
    expect(streetName({ address: { street: null } })).toBe("no street");
  });

  it("2: parseDbUrl ", () => {
    expect(parseDbUrl(config)[1]).toBe("sally");
    expect(parseDbUrl()).toBeNull();
  });

  it("3: startApp ", () => {
    expect(startApp(config)).toBe("starting mydb, sally, muppets");
    expect(startApp()).toBe("can't get config");
  });
});
