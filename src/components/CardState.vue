<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card-custom-event">
          <form action="">
            <input
              @click="eventClick"
              type="text"
              class="form-control input-state-event shadow-none"
              :placeholder="placeholderState"
              maxlength="255"
            />
            <transition name="fade">
              <div v-if="showPublish">
                <div class="text-center">
                  <button type="submit" class="button-custom">
                    <span class="text-publish">Publicar</span>
                  </button>
                </div>
              </div>
            </transition>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSatate",
  data() {
    return {
      showPublish: false,
      placeholderState: "Escribe aqui tu estado"
    };
  },
  methods: {
    eventClick(e) {
      this.showPublish = true;
      this.placeholderState = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
.card-custom-event {
  /* Card Estado */

  /* Auto layout */

  //   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  //   position: static;
  //   width: 374px;
  //   height: 119px;
  //   left: 20px;
  //   top: 20px;

  /* Blanco */

  background: #ffffff;
  /* Jo */

  box-shadow: 0px 8px 16px rgba(110, 120, 130, 0.12);
  border-radius: 15px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 20px 0px;
}

.input-state-event {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;

  // position: static;
  // width: 334px;
  height: 36px;
  left: 20px;
  top: calc(50% - 36px / 2 - 21.5px);

  /* Blanco */

  background: #ffffff;
  /* Color Principal */

  //   border: 1px solid #d00170;
  box-sizing: border-box;
  border-radius: 100px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 15px 0px;
}

.button-custom {
  /* Boton */

  /* Auto layout */

  //   display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 15px;

  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  /* Color Principal */

  background: #d00170;
  border-radius: 3px;
  border: none;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}

.text-publish {
  /* Publicar */

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  /* Blanco */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}

.form-control:focus {
  border-color: #d00170;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.expandable {
  background: #fff;
  overflow: hidden;

  transition: all .5s ease-in-out;
  line-height: 0;
  padding: 0 1em;
  color: transparent;
}
 
.expandable:target {
  line-height: 1.5;
  padding-top: 1em;
  padding-bottom: 1em;
  color: black;
}
</style>
