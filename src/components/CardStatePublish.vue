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
                  :src="getInfoData.imageUser"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="col-10">
                <label class="name-publish">{{
                  getInfoData ? getInfoData.nameUser : ""
                }}</label>
                <label class="date-publish">{{
                  getDateFormate() ? getDateFormate(getInfoData.date) : ""
                }}</label>
                <p class="paragraph-publish text-justify text-wrap">
                  {{ getInfoData ? getInfoData.comment : "" }}
                </p>
              </div>
              <div class="col-6">
                <div class="avatar-group">
                  <img
                    v-for="(reaction, index) in getReaction.slice(0, 3)"
                    :key="index"
                    class="avatar-group avatar avatar-sm rounded-circle"
                    :src="reaction.image"
                    alt=""
                    srcset=""
                  />

                  <label class="text-reaction-publish">
                    {{
                      getReaction.length > 0
                        ? `${getReaction.length} Likes`
                        : "No tienes likes"
                    }}
                  </label>
                </div>
              </div>
              <div class="col-6 col-6 d-flex justify-content-end">
                <a
                  class="text-comment-state text-decoration-none"
                  @click="viewComments"
                  >{{
                    getCommentOnState
                      ? getCommentOnState.length > 0
                        ? `${getCommentOnState.length} Comentarios`
                        : ""
                      : ""
                  }}</a
                >
              </div>
              <span class="line-publish"></span>
            </div>
            <div class="row col-12">
              <div class="float">
                <div v-if="clickReact">
                  <span class="dropdow-emoji float-right">
                    <span @click="dataReact('👍', getKey)"> 👍 </span>
                    <span @click="dataReact('😊', getKey)"> 😊 </span>
                    <span @click="dataReact('😍', getKey)"> 😍 </span>
                    <span @click="dataReact('😢', getKey)"> 😢 </span>
                    <span @click="dataReact('☹', getKey)"> ☹ </span>
                    <span @click="dataReact('😕', getKey)"> 😕 </span>
                  </span>
                </div>
              </div>
              <div class="col-6 d-flex justify-content-start">
                <a
                  class="text-decoration-none link-react-publish"
                  @click="clickReact = !clickReact"
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
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <form @submit.prevent="saveCommentState(objComment, getKey)">
                    <!-- TODO: Organizar el input text del comentario -->
                    <input
                      type="text"
                      class="form-control input-conment-publish shadow-none text-input-conment-publish"
                      placeholder="Escribe un comentario"
                      maxlength="255"
                      v-model="objComment.commentState"
                    />
                    <div class="text-center">
                      <button type="submit" class="button-conment-publish">
                        <span class="text-button-conment-publish"
                          >Publicar</span
                        >
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div v-if="showAllComments">
            <div class="container">
              <div
                class="row mt-1"
                v-for="(item, index) in getCommentOnState"
                :key="index"
              >
                <div class="col-2">
                  <img
                    class="user-publish rounded-circle"
                    src="../assets/user-publish.svg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="col-10">
                  <label class="name-publish">{{ item.nameUserstate }}</label>
                  <label class="date-publish">{{
                    getDateFormate() ? getDateFormate(item.date) : ""
                  }}</label>
                  <p class="paragraph-publish text-justify text-wrap">
                    {{ item.commentState }}
                  </p>
                </div>
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
  props: ["state", "index", "reaction", "commentsOnState"],
  data() {
    return {
      showComment: false,
      cardComment: "",
      clickReact: false,
      objComment: {
        nameUserstate: null,
        commentState: null,
        date: null,
      },
      showAllComments: false,
    };
  },
  mounted() {},
  methods: {
    comment() {
      this.showAllComments = false;
      this.showComment = !this.showComment;
      this.cardComment = this.showComment ? "card-conment-state" : "";
    },

    dataReact(data, id) {
      const states = this.checkDataLocalStorage();
      if (states) {
        let { image } = this.randomUser();

        let userReaction = {
          reaction: data,
          image,
        };

        states[id].reactionData.push(userReaction);
        this.addUpdateDataLocalStorage(states);
        userReaction = {};
        this.$emit("getDataStorage");
      }
    },

    async saveCommentState(data, id) {
      const publishDate = this.getCurrentDate();

      data.date = publishDate;
      const { name } = this.randomUser();
      data.nameUserstate = name;

      const states = this.checkDataLocalStorage();

      if (states) {
        states[id].commentsOnState.push(data);
        this.addUpdateDataLocalStorage(states);

        this.$emit("getDataStorage");
        this.clearPublishCoomentState();
      }
    },

    viewComments() {
      this.showComment = false;
      this.showAllComments = !this.showAllComments;
      this.cardComment = this.showAllComments ? "card-comment-state" : "";
    },

    clearPublishCoomentState() {
      this.showComment = false;
      this.cardComment = "";
      this.objComment = {
        nameUserstate: null,
        commentState: null,
        date: null,
      };
    },
  },

  computed: {
    getInfoData() {
      return this.$props.state;
    },
    getKey() {
      return this.$props.index;
    },
    getReaction() {
      return this.$props.reaction;
    },
    getCommentOnState() {
      return this.$props.commentsOnState;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
.card-custom-state-publish {
  // display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  height: 219px;
  left: 0px;
  top: 0px;

  background: #ffffff;

  box-shadow: 0px 8px 16px rgba(110, 120, 130, 0.12);
  border-radius: 15px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.line-publish {
  // position: static;
  // height: 0px;
  // left: 20px;
  // top: 168px;

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
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  height: 343px;
  left: 20px;
  top: 116px;

  background: #f4f4f4;
  border-radius: 15px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}

.input-conment-publish {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;

  position: static;
  height: 36px;
  left: 20px;
  top: calc(50% - 36px / 2 - 24px);

  background: #ffffff;

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

.dropdow-emoji {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;

  position: relative;
  width: 179px;
  height: 27px;

  background: #f6f6f4;
  border-radius: 15px;

  cursor: pointer;
}

.text-reaction-publish {
  position: static;
  // width: 46px;
  height: 18px;
  left: 60px;
  top: 1px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;

  color: #d00170;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 10px;
}

.text-comment-state {
  // position: static;
  width: 90px;
  height: 16px;
  left: 234px;
  top: 8px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  color: #d00170;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 10px;

  cursor: pointer;
}

.card-comment-state {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  // position: absolute;
  // width: 484px;
  height: 412px;
  left: 20px;
  // top: 381px;

  /* Fondo */

  background: #f4f4f4;
  border-radius: 15px;
}

.form-control:focus {
  border-color: #d00170;
}

.avatar {
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: 20px;
  width: 20px;

  img {
    width: 100%;
  }

  &.rounded-circle {
    img {
      @extend .rounded-circle;
    }
  }

  + .avatar-content {
    display: inline-block;
    margin-left: 0.75rem;
  }
}

.avatar-group {
  .avatar {
    position: relative;
    z-index: 2;
    border: 2px solid;

    &:hover {
      z-index: 3;
    }
  }

  .avatar + .avatar {
    margin-left: -1rem;
  }
}

.avatar-sm {
  width: 36px;
  height: 36px;
  font-size: 1rem * 0.875;
}
</style>
