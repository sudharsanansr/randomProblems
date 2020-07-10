const getSecret = (secret) => {
  return {
    get: () => secret
  };
};

const obj = getSecret(1);
const actual = obj.get();

console.log(obj);
console.log(actual);