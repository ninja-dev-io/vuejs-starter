<template>

    <q-card style="min-width: 350px">

            <q-card-section>
                <slot name="header"></slot>
            </q-card-section>

            <q-card-section>

                <slot name="content"></slot>

            </q-card-section>

            <q-card-actions align="right" class="text-primary">

                <slot name="footer"></slot>

            </q-card-actions>
        </q-card>

</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class DialogContent extends Vue {

        mounted() {

        }

    }
</script>

<style scoped lang="stylus">

</style>
