<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="userProfile" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink: 'https://randomuser.me/api/portraits/men/86.jpg'
    }
  }
}
</script>

<style lang="scss" scoped></style>
