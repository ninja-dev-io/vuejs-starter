<template>
  <q-header elevated>
    <q-toolbar>
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
      </q-avatar>

      <q-toolbar-title>
        Title
      </q-toolbar-title>

      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import {Prop} from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private title: string = 'Header';

  mounted() {
    console.log('mounted');
  }

}
</script>

<style scoped lang="stylus">

</style>
