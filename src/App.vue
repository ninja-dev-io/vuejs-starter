<template>

        <q-layout id="app" view="hHh Lpr lff" container class="shadow-2 rounded-borders">

            <app-header></app-header>

            <q-drawer
                    v-model="drawerLeft"
                    show-if-above
                    :width="200"
                    :breakpoint="700"
                    elevated
                    content-class="bg-primary text-white">
                <q-scroll-area class="fit">
                    <div class="q-pa-sm">

                    </div>
                </q-scroll-area>
            </q-drawer>

            <q-page-container>
                <q-page padding>
                    <router-view />
                </q-page>
            </q-page-container>
        </q-layout>


</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        computed: {},
        methods: {}
    })
    export default class App extends Vue {

        drawerLeft:boolean = true;

        created() {

        }

    }
</script>

<style scoped lang="stylus">

</style>
