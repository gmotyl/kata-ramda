// Definitions
// ====================

const Right = (x) => ({
  chain: (f) => f(x),
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  toString: () => `Right(${x})`,
});

const Left = (x) => ({
  chain: (f) => Left(x),
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  toString: () => `Left(${x})`,
});

const fromNullable = (x) => (x != null ? Right(x) : Left(null));

const tryCatch = (f) => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

const logIt = (x) => {
  console.log(x);
  return x;
};

const DB_REGEX = /postgres:\/\/([^:]+):([^@]+)@.*?\/(.+)$/i;

// #########################################################################
// # 1 - Refactor streetName to use Either instead of nested if's
// #########################################################################
// export const street = (user) => {
//   const address = user.address;

//   if (address) {
//     return address.street;
//   } else {
//     return "no street";
//   }
// };

// export const street = (user) => {
//   const address = user.address;

//   return address ? address.street : "no street";
// };

export const street = (user) =>
  fromNullable(user.address) // Right/Left (address)
    .map((address: any) => address.street)
    .fold(
      () => "no street",
      (street: string) => street
    );

// #########################################################################
// # 1b - Refactor streetName to use Either instead of nested if's
// #########################################################################

// export const streetName = (user) => {
//   const address = user.address;

//   if (address) {
//     const street = address.street;

//     if (street) {
//       return street.name;
//     }
//   }

//   return "no street";
// };

export const streetName = (user) =>
  fromNullable(user.address) //
    .chain((address: any) => fromNullable(address.street))
    .map((street: any) => street.name)
    .fold(
      () => "no street",
      (x: string) => x
    );

// #########################################################################
// # 2 -Refactor parseDbUrl to return an Either instead of try/catch
// #########################################################################
// export const parseDbUrl = (cfg?: string) => {
//   try {
//     const c = JSON.parse(cfg); // throws if it can't parse
//     return c.url.match(DB_REGEX);
//   } catch (e) {
//     return null;
//   }
// };

export const parseDbUrl = (cfg?: string) =>
  tryCatch(() => JSON.parse(cfg))
    .chain((c) => fromNullable(c.url))
    .map((url) => url.match(DB_REGEX))
    .fold(
      () => null,
      (x) => x
    );

// #########################################################################
// # 3 -Using Either and the functions above, refactor startApp
// #########################################################################
// export const startApp_ = (cfg?: string) => {
//   const parsed = parseDbUrl(cfg);

//   if (parsed) {
//     const [_, user, password, db] = parsed;
//     return `starting ${db}, ${user}, ${password}`;
//   } else {
//     return "can't get config";
//   }
// };

export const startApp = (cfg?: string) =>
  fromNullable(parseDbUrl(cfg)) // fromNullable would not be needed if parseDbUrl returns Either monad (dont unfold it too soon)
    .map(([_, user, password, db]) => `starting ${db}, ${user}, ${password}`)
    .map(logIt) // just for debugging example
    .fold(
      () => "can't get config",
      (x) => x
    );
