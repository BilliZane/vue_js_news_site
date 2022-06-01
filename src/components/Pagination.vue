<template>
  <div class="pagination">
    <div class="pagination__wrap">
      <div
        :class="['pagination__item', {pagination__active: idx === currentIdx}]"
        v-for="(item, idx) in itemsAmount"
        :key="idx"
        @click="paginate(idx)"
      >
        {{ idx + 1 }}
      </div>
    </div>
  </div>
</template>

<script>
import {ref, computed} from 'vue'
export default {
  props: ['pagLength', 'pagAmount'],
  emits: ['paginate'],
  setup(props, context) {
    const currentIdx = ref(0)

    const itemsAmount = computed(() =>
      Math.ceil(props.pagLength / props.pagAmount)
    )

    const paginate = (idx) => {
      context.emit('paginate', idx)
      currentIdx.value = idx
    }

    return {
      currentIdx,
      itemsAmount,
      paginate,
    }
  },
}
</script>
<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border: solid 1px red;
  &__wrap {
    display: flex;
    justify-content: center;
    max-width: max-content;
    padding: 2px;
    background: rgb(114, 113, 108);
    padding: 5px 10px;
    border-radius: 60px;
    border: solid 2px #fff;
    opacity: 0.8;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 30px;
    min-height: 30px;
    background: #575757;
    color: #fff;
    margin-right: 5px;
    border: solid 2px #fff;
    border-radius: 50px;
    font-weight: 600;
    font-size: 14px;
    box-shadow: 0 4px 4px 2px rgba(34, 60, 80, 0.2);
    transition: background 600ms;
    &:hover {
      cursor: pointer;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      cursor: pointer;
    }
  }
  &__active {
    background: rgb(69, 69, 168);
    border-color: #fff;
  }
}
</style>