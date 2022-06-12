<template>
  <div class="home">
    <div class="container">
      <TheArticle
        v-for="article in paginatedArticles"
        :key="article.source.id"
        :article="article"
      />
      <ThePagination
        :pagLength="pagLength"
        :pagAmount="pagAmount"
        @paginate="changeItems"
      />
    </div>
  </div>
</template>

<script>
import News from '@/mocks/news'
import TheArticle from '@/components/TheArticle'
import ThePagination from '@/components/ThePagination'
import {ref, computed} from '@vue/runtime-core'
export default {
  components: {TheArticle, ThePagination},
  setup() {
    document.title = 'Global news'
    const news = News

    // start of pagination params
    const pagLength = computed(() => news.value.length)
    const pagAmount = ref(10) // number of posts per page
    const pagFrom = ref(0) // 

    const changeItems = (idx) => {
      pagFrom.value = idx * pagAmount.value
    }

    const paginatedArticles = computed(() =>
      [...news.value].splice(pagFrom.value, pagAmount.value)
    )
    // end of pagination params

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