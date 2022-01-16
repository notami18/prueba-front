<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card-custom-event">
          <form @submit.prevent="saveState(objectState)">
            <input
              @click="eventClick"
              v-model="objectState.comment"
              type="text"
              class="form-control input-state-event shadow-none"
              :placeholder="placeholderState"
              maxlength="255"
            />
            <transition name="fade">
              <div v-if="showPublish">
                <div class="text-center">
                  <!-- <button type="submit" class="button-custom">
                    <span class="text-publish">Publicar</span>
                  </button> -->
                  <input
                    class="button-custom text-publish"
                    type="submit"
                    value="Publicar"
                  />
                </div>
              </div>
            </transition>
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <CardStatePublish
        v-for="(state, index) in dataState"
        :key="index"
        :index="index"
        :state="state"
        :reaction="state.reaction"
        :commentsOnState="state.commentsOnState"
      ></CardStatePublish>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import CardStatePublish from "@/components/CardStatePublish.vue";
import users from "../data/users";
export default {
  name: "CardSatate",
  components: {
    CardStatePublish,
  },
  data() {
    return {
      showPublish: false,
      placeholderState: "Escribe aqui tu estado",
      dataState: [],
      objectState: {
        nameUser: null,
        comment: null,
        date: null,
        reaction: [],
        commentsOnState: []
      },
    };
  },
  mounted() {
    this.getDataStorage();
  },
  methods: {
    eventClick(e) {
      this.showPublish = true;
      this.placeholderState = "";
    },

    getDataStorage() {
      const items = JSON.parse(localStorage.getItem("states"));
      if (items) {
        this.dataState = [];
        this.dataState = items;
      }
    },

    async saveState(data) {
      const currDate = moment.now();
      // var dateToTest = moment(currDate);
      // if dateToTest will always be in past, use currDate as the base to diff, else
      // be prepared to handle the negative outcomes.
      // var result = currDate.diff(dateToTest._i, "days");
      const horaPublicacion = moment(currDate.toString(), "x").format(
        "DD/MM/yyyy hh:mm:ss"
      );

      data.date = horaPublicacion;
      data.nameUser = await users[this.random()];

      this.dataState.push(data);

      await localStorage.setItem("states", JSON.stringify(this.dataState));

      this.clearPublishState();
    },

    random() {
      return Math.floor(Math.random() * users.length);
    },

    clearPublishState() {
      this.showPublish = false;
      this.placeholderState = "Escribe aqui tu estado";
      this.objectState = {
        nameUser: null,
        comment: null,
        date: null,
        reaction: [],
        commentsOnState: []
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
.card-custom-event {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  background: #ffffff;

  box-shadow: 0px 8px 16px rgba(110, 120, 130, 0.12);
  border-radius: 15px;

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

  transition: all 0.5s ease-in-out;
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
