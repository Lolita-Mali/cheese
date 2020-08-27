const storage = [];

function list() {
    return storage;
}

function add(cake) {
    storage.push(cake);
}

function one(id) {
    return storage[id];
}

function edit(id, cake) {
    storage[id] = cake;
}

function del(id) {
    storage.splice(id, 1)
}

