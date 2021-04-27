<template>
    <StackLayout>
        <Label class="h2 text-center" text="Shopping Cart" />
        <Label class="h2 text-center" text="(Tap a product to remove it)" />
        <ListView for="lesson in cart" @itemTap="onItemTap" height="60%">
            <v-template>
                <StackLayout>
                    <Label :text="lesson.title" />
                    <Label :text="`Price: ${lesson.price}`" />
                    <Label
                        :text="`Available Space: ${lesson.numberOfSpaces}`" />
                </StackLayout>
            </v-template>
        </ListView>
        <TextField hint='Enter Your Name...' v-model='name' required
            keyboardType="email" />
        <TextField hint='Enter Your Number...' v-model='number' required
            keyboardType="integer" />
        <Button @tap='submitOrder' text='Submit Order' ios:color="red"
            android:color="red" />
    </StackLayout>
</template>

<script>
    export default {
        props: ["cart"],
        data() {
            return {
                name: "",
                number: "",
                myArray: []
            };
        },
        methods: {
            onItemTap(event) {
                this.$emit("removeProduct", event.item);
                // alert(event.item.name + ' has been added to the cart.')
            },
            submitOrder() {
                if (this.name == 0 || this.number == 0) {
                    alert("Please Enter Your Name & Number");
                } else {
                    let Afte_School_Club = this;
                    for (var i = 0; i < this.cart.length; i++) {
                        var myLesson = {
                            name: this.name,
                            number: this.number,
                            activity: this.cart[i].id,
                            numberOfSpaces: this.cart[i].numberOfSpaces
                        };
                        this.myArray.push(myLesson);
                    }
                fetch("https://cst314500.herokuapp.com/collection/order", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(this.myArray)
                    }
                );
                alert("An order is placed by " + this.name + " at " + this
                    .number);
                }
            }
        }
    };
</script>