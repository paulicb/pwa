<template>
  <div class="col-4 register">
    <div v-if="error" class="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      <p class="sign">Sign up to start planning</p>
      <div class="form-group email">
        <input type="email" class="form-control" v-model="email" placeholder="Enter email"/>
      <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group password">
        <input type="password" class="form-control" v-model="password" placeholder="Enter password"/>
      <small id="emailHelp" class="form-text">Password must contain letters a-z and atleast 1 number.</small>
      </div>
      <button type="submit" class="button btn btn-light button2">Register</button>
    </form>
  </div>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {

  data(){
    return{
      email: "",
      password: '',
      error: ''
    }
  },
    methods:{
        async pressed(){
              try{
                  const user  = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    console.log(user);
                    this.$router.push({name : 'todo'})
              }catch(err){
                  console.log(err)
              }
            }
     }
  };
</script>
<style>
.register {
  padding-top: 100px;
  margin: 0 auto;
}
.sign {
  font-size: 38px !important;
  color: white !important;
}
</style>