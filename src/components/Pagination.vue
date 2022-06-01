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
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 30px;
    min-height: 30px;
    background: rgb(48, 73, 92);
    color: #fff;
    margin-right: 4px;
    border: solid 2px rgb(255, 239, 147);
    border-radius: 50px;
    font-weight: 600;
    font-size: 14px;
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