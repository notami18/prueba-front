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
            <transition name="slide">
              <div v-if="showPublish">
                <div class="text-center">
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
        :reaction="state.reactionData"
        :commentsOnState="state.commentsOnState"
        v-on:getDataStorage="getDataStorage"
      ></CardStatePublish>
    </div>
  </div>
</template>

<script>
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
        imageUser: null,
        comment: null,
        date: null,
        reactionData: [],
        commentsOnState: [],
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
      const items = this.checkDataLocalStorage();
      if (items) {
        this.dataState = [];
        this.dataState = items;
      }
    },

    async saveState(data) {
      const publishDate = this.getCurrentDate();
      const { name, image } = this.randomUser();

      data.date = publishDate;
      data.nameUser = name;
      data.imageUser = image;

      this.dataState.push(data);
      await this.addUpdateDataLocalStorage(this.dataState);
      this.clearPublishState();
      this.getDataStorage();
    },

    clearPublishState() {
      this.showPublish = false;
      this.placeholderState = "Escribe aqui tu estado";
      this.objectState = {
        nameUser: null,
        imageUser: null,
        comment: null,
        date: null,
        reactionData: [],
        commentsOnState: [],
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

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
