<template>
  <h1 class="text-6xl font-bold">Job JOB {{ currentJobId }}</h1>
</template>

<script>
export default {
  name: 'JobView',
  computed: {
    currentJobId() {
      return this.$route.params.id
    }
  }
}
</script>
