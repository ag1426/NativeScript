<template>
    <ListView for='lesson in lessons' @itemTap='onItemTap'>
        <v-template>
            <StackLayout>
    
                <Label :text="`${lesson.activity}`"
                    horizontalAlignment="center" />
                <Label :text="`Location: ${lesson.location}`"
                    horizontalAlignment="center" />
                <Label :text="`Price: ${lesson.price}`"
                    horizontalAlignment="center" />
                

                <Image :src="lesson.image"/>

                <Label
                    :text="`Available Space: ${lesson.numberOfSpaces}`" horizontalAlignment="center"/>
            </StackLayout>
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
                this.$emit("addLesson", event.item);
            }
        },
        created: function() {
            let Afte_School_Club = this;
            fetch('https://cst314500.herokuapp.com/collection/lessons').then(function(response) {
                console.log("Data is transmitting.");
                response.json().then(function(json) {
                    Afte_School_Club.lessons = json;
                });
            });
        }
    };
</script>