<template>
  <form class="card auth" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>

    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email">
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password">
      <small class="danger" v-if="errMsg">{{ errMsg }}</small>
    </div>
    <button class="btn primary">Sing in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useStore } from 'vuex'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const errMsg = ref()
    const router = useRouter()
    const store = useStore()

    const onSubmit = () => {
      const auth = getAuth()
      const user = {
        email: email.value,
        password: password.value
      }
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
          router.push('/')
          store.commit('addData', user)
        })
        .catch((error) => {
          errMsg.value = 'The email address or password is incorrect.'
        })
    }

    return { errMsg, email, password, onSubmit }
  },
}
</script>
