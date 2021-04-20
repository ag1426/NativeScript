<template>

<Page style="background-color: black">

<ActionBar title="After School Activities" flat="true" />



<StackLayout>

<BottomNavigation height="100%">

<TabStrip>

<TabStripItem>

<Label text="Lessons" class="h2 p-5"></Label>

<Image src="~/App_Resources/saving-book.png"></Image>

</TabStripItem>

<TabStripItem>

<Label text="Checkout" class="h2 p-5"></Label>

<Image src="~/App_Resources/checkout.png"></Image>

</TabStripItem>

</TabStrip>

<TabContentItem>

<GridLayout>

<ProductList @addLesson="addToCart"

class="h2 p-10" />

</GridLayout>

</TabContentItem>

<TabContentItem>

<GridLayout>

<Checkout :cart='cart'

@removeProduct='removeFromCart' />


</GridLayout>

</TabContentItem>

</BottomNavigation>

</StackLayout>

<!-- <ProductList/> -->



</Page>

</template>



<script>

import ProductList from "./ActivityList";

import Checkout from "./Checkout";

export default {

data() {

return {

cart: [],

mycart: []

};

},

components: {

ProductList,

Checkout

},



methods: {

addToCart(product) {

let clubstore = this;

this.cart.push(product);

product.addedSpaces++;

for (var i = 0; i < this.cart.length; i++) {

if (this.cart[i].availableInventory == 0) {

alert("No Products Available");

this.cart.splice(product, 1);

} else {

for (var i = 0; i < this.cart.length; i++) {

var newProduct = {

availableInventory: clubstore.cart[i]

.availableInventory -

this.cart[i].addedSpaces

};

var lessonID = this.cart[i]._id;

fetch(

"https://cst3145-cw2-heroku.herokuapp.com/collection/products/" +

lessonID +

"", {

method: "PUT",

headers: {

"Content-Type": "application/json"

},

body: JSON.stringify(newProduct)

}

);

}

alert("Product has been added");

}

}

},



removeFromCart(product) {

alert("remove product from cart.");

for (let i = 0; i < this.cart.length; i++) {

if (this.cart[i] == product) this.cart.splice(i, 1);

}

}

}

};

</script>



<style scoped>

</style>