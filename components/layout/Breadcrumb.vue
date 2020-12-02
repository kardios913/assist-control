<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item" v-for="(item, index) in itemList" :key="index">
      <span class="active">{{ item.name }}</span>
      <!--
      <span class="active" v-if="isLast(index)">{{ item.name }}</span>
      <router-link :to="item" v-else>{{ item.name }}</router-link>
    -->
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    itemList () {
      return this.list.filter(i => i.name !== null)
    }
  },
  methods: {
    isLast (index) {
      return index === this.list.length - 1
    },
    showName (item) {
      return item.name
    }
  }
}
</script>
