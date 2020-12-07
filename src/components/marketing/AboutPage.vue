<template>
    <div class="col-6 flex-center">
    <p>Feeling busy and overwhelmed with everyday's activities and tasks?</p>
    <p>Keep your life organized and plan your activities with our app!</p>
    <router-link class="acc" :to="{ name: 'register'}"><button class="button btn btn-light">Sign up now</button></router-link>
  </div>
</template>

<style >
.flex-center{
  color:white !important;
  font-size: 40px;
  margin: 0 auto;
  text-align: center;
  margin-top: 100px;
}
.button{
  color:blueviolet !important;
}
</style>
