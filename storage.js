function getStorage(type) {
    const storageList = {
        ram: getRamStorage(),
        local: null,
        firebase: null,
        http: null,
    };

    return storageList[type];

}
