<template>
 <p>{{ title }}</p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  private title: string = 'Footer';
}
</script>

<style scoped lang="stylus">

</style>
