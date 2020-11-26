<template>
    <div class="col-4 login">
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="username">
    <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
  </div>
  <button type="submit" class="btn btn-primary">Log in</button>
</form>
    </div>
</template>


<script>

export default {
    name: 'login',
    data(){
        return{
            username: '',
            password: '',
        }
    }
}
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
button{
    float:right;
}
</style>