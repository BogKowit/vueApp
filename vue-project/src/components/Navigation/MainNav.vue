<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 w-full bg-white">
      <div class="mx-auto flex h-16 flex-nowrap border-b-2 border-white border-b-brand-gray-1 px-8">
        <a :href="url" class="flex h-full items-center text-xl">{{ companyName }}</a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="ml-7 h-full first:ml-0" v-for="value in menuItems" :key="value">
              <a href="" class="flex h-full items-center py-2.5"> {{ value }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else text="Sing Up" @click="loginUser" />
        </div>
      </div>

      <TheSubnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue'
import ProfileImage from './ProfileImage.vue'
import TheSubnav from './TheSubnav.vue'
export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav
  },
  data() {
    return {
      companyName: 'Bobo Careers',
      url: '/',
      menuItems: ['Teams', 'Locations', 'Life at BoboCorp', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    }
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn
      }
    }
  }
}
</script>
