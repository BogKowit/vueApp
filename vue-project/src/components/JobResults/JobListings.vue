<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <routerLink
            v-if="previousPage"
            role="link"
            :to="{ name: 'jobs', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Previous
          </routerLink>

          <routerLink
            v-if="nextPage"
            role="link"
            :to="{ name: 'jobs', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Next
          </routerLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import JobListing from './JobListing.vue'
import axios from 'axios'

export default {
  name: 'JobListings',
  components: {
    JobListing
  },
  data() {
    return {
      jobs: []
    }
  },
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || '1')
    },
    previousPage() {
      const previousPage = this.currentPage - 1
      const firsPage = 1
      return previousPage >= firsPage ? previousPage : undefined
    },
    nextPage() {
      const nextPage = this.currentPage + 1
      const maxPage = this.jobs.length / 10
      return nextPage <= maxPage ? nextPage : undefined
    },
    displayedJobs() {
      const pageString = this.currentPage
      const pageNumber = Number.parseInt(pageString)
      const firstJobIndex = (pageNumber - 1) * 10
      const lastJobIndex = pageNumber * 10
      return this.jobs.slice(firstJobIndex, lastJobIndex)
    }
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_APP_API_URL
    const response = await axios.get(`${baseUrl}/jobs`)
    this.jobs = response.data
  }
}
</script>
