const storage = getStorage('ram');

function addCake() {
    console.log('cake');
    storage.add({
        name: document.getElementById('name').value,
        weight: document.getElementById('weight').value,
        cost: document.getElementById('cost').value,
        price: document.getElementById('price').value,
        image: document.getElementById('image').value,
    })
    console.log(storage.list());


}
