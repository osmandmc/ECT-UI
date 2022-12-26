<template>
  <section>
    <div class="ui segment grey signup-form">
      <h2 class="ui header">CREATE ACCOUNT</h2>
      <form class="ui form large">
        <div class="ui segment">
          <div class="ui stacked segment">
            <!-- FULL NAME -->
            <div class="field">
              <div class="ui left icon input big">
                <i class="user icon"></i>
                <input type="text" placeholder="Full Name" />
              </div>
            </div>
            <!-- PASSWORD -->
            <div class="field">
              <div class="ui left icon input big">
                <i class="lock icon"></i>
                <input type="password" placeholder="Password" />
              </div>
            </div>
            <button class="ui button big red fluid">SIGN UP</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "LogIn",
};
</script>

<style>
section {
  height: 100vh;
  background-color: #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signup-form {
  width: 450px;
  text-align: center;
}
</style>
