<template>
  <div>
    <ClrInset :height="demoHeight">
      <slot name="demo"></slot>
    </ClrInset>
    <template v-if="dont"><p class="bar danger">Don't</p></template>
    <template v-if="!dont"><p class="bar">Do</p></template>
    <slot name="summary"></slot>
  </div>
</template>

<script>
export default {
  name: 'ClrDoDont',
  props: {
    dont: Boolean,
    demoHeight: [Number, String],
  },
};
</script>

<style scoped>
.bar::before {
  content: ' ';
  display: block;
  width: 100%;
  background: #318500;
  height: 0.4rem;
  position: absolute;
  top: -1rem;
  left: 0;
}
.bar.danger::before {
  background: #e02200;
}
p {
  position: relative;
  color: #318500;
}
p.danger {
  color: #e02200;
}
</style>
