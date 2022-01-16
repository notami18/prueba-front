<template>
  <div>
    <div class="row mt-3">
      <div class="col-md-12">
        <div :class="cardComment">
          <div class="card-custom-state-publish">
            <div class="row">
              <div class="col-2">
                <img
                  class="user-publish rounded-circle"
                  src="../assets/user-publish.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="col-10">
                <label class="name-publish">{{getInfoData.nameUser}}</label>
                <label class="date-publish">{{getInfoData.date}}</label>
                <p class="paragraph-publish text-justify text-wrap">
                  {{getInfoData.comment}}
                </p>
              </div>
              <span class="line-publish"></span>
            </div>
            <div class="row col-12">
              <div class="col-6 d-flex justify-content-start">
                <a class="text-decoration-none link-react-publish"
                  >Reaccionar</a
                >
              </div>
              <div class="col-6 d-flex justify-content-end">
                <a
                  class="text-decoration-none link-conment-publish"
                  @click="comment"
                  >Comentar</a
                >
              </div>
            </div>
          </div>
          <div v-if="showComment">
            <div class="row">
              <div class="col-12">
                <form action="">
                  <!-- TODO: Organizar el input textdel comentario -->
                  <input
                    type="text"
                    class="form-control input-conment-publish shadow-none text-input-conment-publish"
                    placeholder="Escribe un comentario"
                    maxlength="255"
                  />
                  <div class="text-center">
                    <button type="submit" class="button-conment-publish">
                      <span class="text-button-conment-publish">Publicar</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardStatePublish",
  props: ["state"],
  data() {
    return {
      showComment: false,
      cardComment: "",
    };
  },
  mounted() {

  },
  methods: {
    comment() {
      this.cardComment = "card-conment-state";
      this.showComment = true;
    },
  },
  computed: {
    getInfoData() {
      return this.$props.state;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
.card-custom-state-publish {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  height: 219px;
  left: 0px;
  top: 0px;

  background: #ffffff;

  box-shadow: 0px 8px 16px rgba(110, 120, 130, 0.12);
  border-radius: 15px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  // margin: 0px 0px;
}

.line-publish {
  position: static;
  height: 0px;
  left: 20px;
  top: 168px;

  border: 1px solid #f4f4f4;

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  margin: 15px 0px;
}

.name-publish {
  /* Nombre */

  position: static;
  width: 286px;
  height: 22px;
  left: 0px;
  top: 0px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 137% */

  /* Color Principal */

  color: #d00170;
}

.date-publish {
  position: static;
  width: 286px;
  height: 16px;
  left: 0px;
  top: 22px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 16px;

  color: #878787;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
}

.paragraph-publish {
  position: static;
  width: 286px;
  height: 48px;
  left: 0px;
  top: 38px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  color: #878787;

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
}

.user-publish {
  position: static;
  width: 38px;
  height: 38px;
  right: 296px;
  top: calc(50% - 38px / 2 - 24px);

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;

  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;

  background: #dedede;
}

.link-react-publish {
  position: static;
  //   width: 70px;
  height: 16px;
  //   right: 254px;
  top: calc(50% - 16px / 2);

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  /* Gris Oscuro */

  color: #2e2e2e;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  cursor: pointer;
}

.link-conment-publish {
  height: 16px;
  top: calc(50% - 16px / 2);

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #2e2e2e;

  flex: none;
  order: 1;
  flex-grow: 0;

  cursor: pointer;
}

.card-conment-state {
  //   display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  //   width: 374px;
  height: 343px;
  left: 20px;
  top: 116px;

  background: #f4f4f4;
  border-radius: 15px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  //  margin: 20px 0px;
}

.input-conment-publish {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;

  position: static;
  // width: auto;
  height: 36px;
  left: 20px;
  top: calc(50% - 36px / 2 - 24px);

  /* Blanco */

  background: #ffffff;
  /* Fondo */

  border: 1px solid #f4f4f4;
  box-sizing: border-box;
  border-radius: 100px;
  margin: 20px 0px;
}

.button-conment-publish {
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

.text-button-conment-publish {
  /* Publicar */

  position: static;
  width: 50px;
  height: 18px;
  left: 15px;
  top: 5px;

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

.text-input-conment-publish {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #878787;
}
</style>
