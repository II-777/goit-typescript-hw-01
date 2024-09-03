function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objA = {
  name: 'Alice',
  age: 25
};

const objB = {
  email: 'alice@example.com',
  city: 'Wonderland'
};

const mergedObj = merge(objA, objB);
console.log(mergedObj);

