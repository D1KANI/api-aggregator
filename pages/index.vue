<template>
  <main>
    <section class="index">
      <div class="container">
        <h1>Applications with various API</h1>
        <div class="index__grid">
          <nuxt-link
            v-for="(item, index) in IndexLinks"
            :key="index"
            :to="item.link"
            class="index-item"
          >
            <p class="index-item__title">{{ item.title }}</p>
            <p v-if="item.description" class="index-item__description">
              {{ item.description }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import IndexLinks from '~/data/index'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      IndexLinks,
    }
  },
})
</script>
<style lang="scss" scoped>
.index {
  padding: 40px 0;

  &__grid {
    margin-top: 42px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }

  &-item {
    padding: 24px 32px;
    border: 3px solid $colorBlue;
    border-radius: 1rem;
    background-color: $colorBackground;
    box-shadow: 0px 8px 0px $colorLightBlue;
    transition: all 200ms linear;

    &:hover {
      transform: translateY(8px);
      box-shadow: 0px 0px 0px $colorLightBlue;
    }

    &__title {
      font-size: 24px;
      font-weight: 600;
    }

    &__description {
      font-weight: 500;
      margin-top: 12px;
    }
  }
}
</style>
