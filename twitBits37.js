const m = {
    'foo': 'bar'
};

const n = {
    'baz': m
}

const z = n['baz']['foo'];

console.log(z);