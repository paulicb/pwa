<template>
    <div class="col-4 login">
        <form @submit.prevent="pressed">
        <p>Log in to plan</p>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" v-model="email">
    <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
  </div>
  <p class="acc">Dont have an account? No problem, <router-link class="acc" :to="{ name: 'register'}">Sign up </router-link>now.</p>
  <button type="submit" class="button btn btn-light button2">Log in</button>
</form>
 <div class="error" v-if="error">{{error.message}}</div>
    </div>
</template>


<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
    data(){
        return{
            email:"",
            password: "",
            error: ""
        };
    },
    methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "todo" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }

};
</script>

<style>
.form-group{
    color:white !important;
    background-color: transparent !important;
}
.login{
    padding-top: 100px;
    margin:0 auto;
}
.button2{
    float:right;
}
.acc{
    text-align: center;
    font-size: 12px !important;
    color: white  !important;
}
p{
    color:white !important;
}
.error{
  text-align: center;
  font-size: 15px;
  color:purple !important;
}
</style>