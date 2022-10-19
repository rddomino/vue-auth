<template>
  <nav class="navbar">
    <h3>Profile</h3>

    <ul class="navbar-menu">
      <li>
        <a href="#" @click="handleLogout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'

export default {
  setup() {
    let auth

    const handleLogout = () => {
      auth = getAuth()
      signOut(auth)
        .catch(e => alert(e.message))
    }

    return {handleLogout}

  }
}
</script>

<style scoped>

</style>