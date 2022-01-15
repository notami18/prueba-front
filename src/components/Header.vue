<template>
  <div>
    <div class="nav-custom">
      <div class="container">
        <div class="row">
          <div class="col-10 justify-content-center text-center">
            <span class="navbar-text title-merqueo"> Merqueo Test </span>
          </div>
          <div class="col-2 justify-content-end text-right">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
.nav-custom {
  padding: 20px;

  height: 64px;
  top: 0px;

  background: #ffffff;

  box-shadow: 0px 8px 16px rgba(110, 120, 130, 0.12);
  border-radius: 0px 0px 15px 15px;
}

.title-merqueo {
  position: static;
  width: 112px;
  height: 24px;
  left: 151px;
  top: 20px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  color: #2e2e2e;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 30px;
}

</style>
