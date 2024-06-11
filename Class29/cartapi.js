//'https://fakestoreapi.com/carts/user/2'
//'https://fakestoreapi.com/user/1'

//scenario 1: Fetch data for cart and user that we need to show in header.





async function fetchFunc() {
    console.log(performance.now());
    url1 = 'https://fakestoreapi.com/carts/user/2'
    url2 = 'https://fakestoreapi.com/carts/user/2'


    const reponseCart = await fecth(url1);
    const reponseUser = await fecth(url2);

    const cartData = reponseCart.json();
    const carUser = reponseUser.json();

    console.log(cartData);
    console.log(carUser);

    console.log(performance.now());
}

fetchFunc();




















































