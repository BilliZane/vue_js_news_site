<template>
  <div class="details">
    <div class="container">
      <TheArticle :article="singleArticle" />
    </div>
  </div>
</template>
<script>
import News from '@/mocks/news'
import TheArticle from '@/components/TheArticle'
import {computed} from 'vue'
export default {
  components: {TheArticle},
  props: ['id'],

  setup(props) {
    const news = News
    const singleArticle = computed(
      () => news.value.filter((x) => x.source.id === +props.id)[0]
    )

    return {
      news,
      singleArticle,
    }
  },
}
</script>
<style lang="scss">
.details {
  padding: 30px 0;
}
.foo {
  background: #fff;
}
</style>