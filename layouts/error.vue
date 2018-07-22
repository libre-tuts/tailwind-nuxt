<template>
  <div>
    <div class="code-area">
      <span class="block italic text-grey-dark" v-if="error.statusCode === 404">// 404 - page not found</span>
      <span class="block">
        <span class="text-red">if</span>(<span class="text-light-blue">!</span><span class="text-light italic">found</span>) {
      </span>
      <span class="block">
        <span class="indent text-blue">throw</span><span>(<span class="text-red">"(╯°□°)╯︵ ┻━┻"</span>);</span>
      </span>
      <span>}</span>
      <span class="block">
        <span class="text-red">else</span> {
        <span class="block">
          <span class="indent text-blue">redirect</span><span>(<span class="text-red">"<nuxt-link to="/" class="text-blue no-underline">home</nuxt-link>"</span>);</span>
        </span>
      </span>
      <span>}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    dark: true
  })
}
</script>
<style scoped>
@media screen and (max-width: 320px) {
  .code-area {
    font-size: 5vw;
    min-width: auto;
    width: 95%;
    margin: auto;
    padding: 5px;
    padding-left: 10px;
    line-height: 6.5vw;
  }
}
</style>
