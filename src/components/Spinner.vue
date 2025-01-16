<template>
  <h1>Loading...</h1>

  <div class="spinner"></div>
</template>

<script>
export default {

}
</script>

<style>

.spinner {
    display: block;
    margin: 0 auto;

  border: 10px solid rgb(255, 247, 247);
  border-radius: 50%;
  border-top: 15px solid crimson;
  width: 60px;
  height: 60px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }

}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }

}

</style>