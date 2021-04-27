<template>
    <Page style="background-color: red">
        <ActionBar title="Activity Store" />
        <Label text="Welcome to the Activity Store" class="h2"
            style="color:black;" />
        <TabView>
            <TabViewItem title="Lessons" class="h2 text-capitalize">
                <StackLayout>
                    <LessonList @addProduct="addToCart" :lessons="lessons" />
                </StackLayout>
            </TabViewItem>
            <TabViewItem title="Checkout" class="h2 text-capitalizae">
                <StackLayout>
                    <Checkout :cart="cart" :lessons="lessons"
                        @removeProduct="removeFromCart" />
                </StackLayout>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
    import LessonList from "./LessonList";
    import Checkout from "./Checkout";
    export default {
        data() {
            return {
                cart: [],
                myArray: []
            };
        },
        components: {
            LessonList,
            Checkout
        },
        methods: {
            addToCart(lesson) {
                let Afte_School_Club = this;
                this.cart.push(lesson);
                lesson.addedLessons++;
        
           for (var i = 0; i < this.cart.length; i++) {
             if (this.cart[i].numberOfSpaces == 0) {
             alert("No activity Available");
             this.cart.splice(lesson, 1);
             } 
             else {
              for (var i = 0; i < this.cart.length; i++) {
                var newLesson = {
                  numberOfSpaces: Afte_School_Club.cart[i].numberOfSpaces - this.cart[i].addedLessons
                 };
             var lessonID = this.cart[i]._id;
            fetch("https://cst314500.herokuapp.com/collection/lessons/" + lessonID + "", 
            {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
          body: JSON.stringify(newLesson)
                 }
              );
             }
         alert("Product has been added");
            }
           }
         },
         removeFromCart(lesson) {
         alert("remove product from cart.");
         for (let i = 0; i < this.cart.length; i++) {
           if (this.cart[i] == lesson) this.cart.splice(i, 1);
                }
           }
        }
};
</script>

<style>
</style>