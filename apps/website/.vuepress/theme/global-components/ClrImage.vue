<template>
  <img :src="src" :alt="title" />
</template>

<script>
export default {
  name: 'ClrImage',
  props: ['src', 'title'],
};
</script>

<style scoped>
img {
  width: 100%;
  max-width: 45rem;
}
</style>
