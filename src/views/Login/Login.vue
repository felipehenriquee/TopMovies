<template>
  <div class="container mx-auto flex justify-center items-center min-h-screen">
    <div class="login-form p-6 rounded shadow-lg w-full max-w-sm">
      <h2 class="text-2xl font-semibold mb-6 text-white">Login</h2>
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-8 text-white">
        <FloatLabel>
          <InputText
            id="login"
            v-model="profile.login"
            class="w-full"
            required
            placeholder=" "
          />
          <label for="login" class="font-weight-bold">Email ou Username*</label>
        </FloatLabel>

        <FloatLabel>
          <Password
            id="password"
            v-model="profile.password"
            class="w-full"
            required
            toggleMask
            :feedback="false"
            placeholder=" "
          />
          <label for="password" class="font-weight-bold">Senha*</label>
        </FloatLabel>

        <Button type="submit" class="w-full mt-4 p-button p-component">
          Login
        </Button>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const profile = ref({
  login: "",
  password: "",
});

function handleSubmit() {

}
</script>
<style>
.login-form{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.p-password-input{
    width: 100%;
}
</style>