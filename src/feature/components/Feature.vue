<template>

</template>

<script lang='ts'>
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Inject} from "inversify-props";
    import {mapActions, mapGetters} from "vuex";
    import {Watch} from "vue-property-decorator";
    import {UtilsService} from "@/common/services/utils.service.interface";

    @Component({
        computed: {
            ...mapGetters(["getData"])
        },
        methods: {
            ...mapActions(["saveData"])
        },
        components: {

        }
    })
    export default class Feature extends Vue {

        @Inject("UtilsService")
        utils!: UtilsService;

        constructor() {
            super();
        }

        @Watch("$route", {immediate: true, deep: true})
        onUrlChange(newVal: any) {

        }

        created() {

        }

        mounted() {

        }



    }
</script>

<style scoped lang='stylus'>

</style>
