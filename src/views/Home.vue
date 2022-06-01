<template>
  <div class="home">
    <div class="container">
      <Pagination
        :pagLength="pagLength"
        :pagAmount="pagAmount"
        @paginate="changeItems"
      />
      <TheArticle
        v-for="article in paginatedArticles"
        :key="article.source.id"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import News from '@/mocks/news'
import TheArticle from '@/components/TheArticle'
import Pagination from '@/components/Pagination'
import {ref, computed} from '@vue/runtime-core'
export default {
  components: {TheArticle, Pagination},
  setup() {
    const news = News

    // pagination params
    const pagLength = computed(() => news.value.length)
    const pagAmount = ref(10)
    const pagFrom = ref(0)

    const changeItems = (idx) => {
      pagFrom.value = idx * pagAmount.value
      console.log(idx)
    }

    const paginatedArticles = computed(() =>
      [...news.value].splice(pagFrom.value, pagAmount.value)
    )

    return {
      news,
      pagLength,
      pagAmount,
      pagFrom,
      changeItems,
      paginatedArticles,
    }
  },
}
</script>

<style lang="scss">
.home {
  padding: 30px 0;
}
</style>