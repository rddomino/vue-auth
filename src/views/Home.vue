<template>
  <div class="home" v-if="isLoggenIn">
    <the-navbar />
    <div class="card profile">
      <h3>Черепахин Дмитрий</h3>
      <table class="table">
        <tr>
          <td class="title">Должность:</td>
          <td>Frontend - разработчик</td>
        </tr>
        <tr>
          <td class="title">Ссылка на github:</td>
          <td><a href="https://github.com/rddomino/">https://github.com/rddomino/</a></td>
        </tr>
        <tr>
          <td class="title">Последний проект:</td>
          <td><a href="https://kinomanager.dev.iamrobot.xyz/">https://kinomanager.dev.iamrobot.xyz/</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar'
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  setup() {
    let auth
    const isLoggenIn = ref(false)

    onMounted(() => {
      auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          isLoggenIn.value = true
        } else {
          isLoggenIn.value = false
        }
      })
    })

    return {isLoggenIn}
  },
  components: {TheNavbar}
}
</script>
