<!--./src/components/NavBar.vue -->

<template>
  <header>
    <div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/">Blog</router-link></li>
          <li><router-link to="about">Abouta</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>