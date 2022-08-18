<template>
  <div class="demo-container">
    <Animated>
      <div class="demo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque molestie nisl ac suscipit. Maecenas in auctor ligula.
        Vestibulum suscipit mi eget risus aliquet, id lacinia elit consectetur. Donec a tincidunt justo. Etiam varius urna et finibus lacinia.
        Vestibulum id auctor urna. Integer non facilisis urna. Nullam dapibus, sem in blandit posuere, sapien sem rhoncus urna, ac placerat massa sem tempor nisi.
      </div>
    </Animated>

    <Animated animation-type="zoom">
      <div class="demo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque molestie nisl ac suscipit. Maecenas in auctor ligula.
        Vestibulum suscipit mi eget risus aliquet, id lacinia elit consectetur. Donec a tincidunt justo. Etiam varius urna et finibus lacinia.
        Vestibulum id auctor urna. Integer non facilisis urna. Nullam dapibus, sem in blandit posuere, sapien sem rhoncus urna, ac placerat massa sem tempor nisi.
        <br><br>
        Vivamus eget nulla ut nisl venenatis lobortis non quis tellus. Nullam eget ornare tortor. Donec ac erat eget massa dapibus condimentum.
        Nunc sed nisi vel quam facilisis pharetra nec at lectus. Nam ipsum sem, auctor vel varius quis, fringilla non magna. Cras id magna velit.
        Nam faucibus mi massa, ac posuere nulla elementum at. Duis eget felis vitae nisl aliquet tempor. Vivamus nec porta purus.
      </div>
    </Animated>
  </div>

</template>


<script setup>
  // eslint-disable-next-line no-unused-vars
  import Animated from '@/components/Animated.vue';
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo {
  max-width: 600px;
  border: 2px solid #2c3e50;
  padding: 2rem;
  margin: 2rem auto;
  background-color: #42b983;
}
.demo-container {
  min-height: 100vh;
  padding: 90vh 0;
}
</style>