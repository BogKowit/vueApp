<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses"> {{ action }} </span>

      <br />
      for
      everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at BoboCorp</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementList'

export default {
  name: 'TheHeadline',
  data() {
    return {
      action: 'Build',
      interval: null
    }
  },
  computed: {
    actionClasses() {
      return {
        // build: this.action === 'Build',
        // create: this.action === 'Create',
        // design: this.action === 'Design',
        // code: this.action === 'Code'
        [this.action.toLowerCase()]: true
      }
    }
  },
  created() {
    this.changeTitle()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const action = ['Build', 'Create', 'Design', 'Code']
        this.action = nextElementInList(action, this.action)
      }, 3000)
    }
  }
}
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
