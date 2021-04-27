<template>
    <ListView for="lesson in lessons" @itemTap="onItemTap"
        style="color:black;height:100%">
        <v-template>
                  <Stacklayout columns="60, auto, *" rows="100, auto, *" width="500"
                height="230" backgroundColor="steelblue">
                      <Image height="30%"
                    :src="`https://cst314500.herokuapp.com/${lesson.image}`"
                    width="50%" />
                       <Label :text="`${lesson.activity}`"
                    horizontalAlignment="center" />
                <Label :text="`Location: ${lesson.location}`"
                    horizontalAlignment="center" />
                <Label :text="`Price: ${lesson.price}`"
                    horizontalAlignment="center" />
                <Label :text="`Available Space: ${lesson.numberOfSpaces}`" horizontalAlignment="center"/>
                  </Stacklayout>
        </v-template>
    </ListView>
</template>

<script>
    export default {
        data() {
            return {
                lessons: []
            };
        },
        methods: {
            onItemTap(event) {
                this.$emit("addProduct", event.item);
            }
        },
        created: function() {
            let Afte_School_Club = this;
            fetch(
                "https://cst314500.herokuapp.com/collection/lessons"
            ).then(function(response) {
                console.log("Data is transmitting.");
                response.json().then(function(json) {
                    Afte_School_Club.lessons = json;
                });
            });
        }
    };
</script>