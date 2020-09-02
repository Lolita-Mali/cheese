function getRamStorage() {
    const storage = [];

    function list() {
        return storage;
    }

    function add(cake) {
        cake.id = new Date().getTime();
        cake.createdAt = new Date();
        cake.sold = false;
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

    return {
        list: list,
        add: add,
        one: one,
        edit: edit,
        del: del,
    }
}

