<template>
  <div class="article">
    <div class="article__img-wrap">
      <img class="article__img" :src="article.urlToImage" alt="Image" />
    </div>
    <div class="article__info">
      <div class="article__title">
        {{ titleSnippet }}
      </div>
      <div class="article__content">{{ descriptiontSnippet }}</div>
      <div class="article__footer">
        <div class="article__footer-item">
          <span class="article__footer-author">Author:</span>
          {{ authorSnippet }}
        </div>
        <div class="article__footer-item">{{ articleDate }}</div>
        <router-link
          class="article__footer-item article__btn"
          :to="{name: 'Details', params: {id: article.source.id}}"
          >Read more &raquo;</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import {computed} from 'vue'
export default {
  props: ['article'],
  setup(props) {
    const titleSnippet = computed(
      () => props.article.title.substr(0, 80) + '...'
    )

    const descriptiontSnippet = computed(
      () => props.article.description.substr(0, 100) + '...'
    )

    const authorSnippet = computed(
      () => props.article.author.substr(0, 10) + '...'
    )

    const articleDate = computed(() =>
      new Date(props.article.publishedAt)
        .toDateString()
        .split(' ')
        .splice(1, 3)
        .join(' / ')
    )

    return {
      titleSnippet,
      descriptiontSnippet,
      authorSnippet,
      articleDate,
    }
  },
}
</script>
<style lang="scss">
.article {
  display: flex;
  background: #fff;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px 2px rgba(34, 60, 80, 0.2);
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 630px) {
    flex-wrap: wrap;
  }
  &__img-wrap {
    @media (max-width: 630px) {
      min-width: 100%;
      text-align: center;
      padding-bottom: 20px;
    }
  }
  &__img {
    display: block;
    max-width: 300px;
    display: block;
    box-shadow: 0 4px 8px 5px rgba(34, 60, 80, 0.2);
    border-radius: 10px;
    @media (max-width: 630px) {
      max-width: 100%;
    }
  }
  &__info {
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__title {
    font-size: 18px;
    line-height: 20px;
    font-weight: 600;
    padding-bottom: 20px;
  }
  &__content {
    line-height: 20px;
    padding-bottom: 30px;
    font-weight: 400;
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  &__footer-item {
    background: #575757;
    color: #fff;
    max-width: max-content;
    padding: 8px;
    font-size: 14px;
    margin-right: 2px;
    margin-bottom: 5px;
    border-radius: 4px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__btn {
    background: rgb(84, 84, 253);
    text-decoration: none;
    transition: background 600ms;
    &:hover {
      cursor: pointer;
      background: rgb(48, 48, 255);
    }
  }
  &__footer-author {
    font-weight: 600;
  }
}
</style>