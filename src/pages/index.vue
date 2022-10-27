<script lang="ts" setup>
</script>

<template lang="pug">
div.wrapper
  definitions
  key-terms
  erlang
  code-snippets
  misc
  img.m-auto.prose(src="public/std.png")
  img.m-auto.prose(src="public/peterson.png")
  img.m-auto.prose(src="public/bad-situation.png")
</template>

<style lang="sass">
.wrapper
  h1, h2, h3, h4, h5
    line-height: 1
    margin: 2px 0px

  pre
    padding: 10px
    margin: 0px

  li > ul
    margin: 0px
</style>
