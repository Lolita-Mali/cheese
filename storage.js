const storage = getStorageExample();

function list() {
    return storage;
}

function add(cake) {
    storage.push(cake);
}

function one(id) {
    let index = storage.findIndex(function (cake) {
        if (id === cake.id) {
            return true;
        } else {
            return false;
        }
    });
    return storage[index];
}

function edit(id, cake) {
    let index = storage.findIndex(function (cake) {
        if (id === cake.id) {
            return true;
        } else {
            return false;
        }
    });
    storage[index] = cake;
}

function del(id) {
    let index = storage.findIndex(function (cake) {
        if (id === cake.id) {
            return true;
        } else {
            return false;
        }
    });
    storage.splice(index, 1);
}




