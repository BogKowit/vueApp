<template>
  <form
    @submit.prevent="searchForJobs"
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute -top-10 left-0">Role</label>
        <TextInput placeholder="Software engineer" id="role" v-model="role" />
      </div>
    </div>
    <span
      class="flex h-full w-10 items-center justify-center border-l border-r border-brand-gray-3 bg-brand-gray-2"
    >
      in
    </span>
    <div class="relative flex h-full flex-1 items-center pl-3">
      <label class="absolute -top-10 left-0"> Where? </label>
      <TextInput  id="location" placeholder="Los Angles" v-model="location" />
    </div>
    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" @click="null" />
  </form>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue'
import TextInput from '@/components/shared/TextInput.vue'

export default {
  name: 'JobSearchForm',
  components: { ActionButton, TextInput },
  data() {
    return {
      role: '',
      location: ''
    }
  },
  methods:{
    searchForJobs() {
      this.$router.push({
        name:"jobs",
        query: { role: this.role, location: this.location,}
      })
    }
  }
}
</script>
