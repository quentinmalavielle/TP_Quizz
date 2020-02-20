<template>
  <div v-if="theme">
    <div class="d-flex align-items-end quiz-title-bloc" v-for="quiz in listeQuiz" :key="quiz.id">
        <h3 class="flex-fill quiz-title-text">Quiz {{quiz.titre}} de {{ theme.titre }}</h3>
        <button type="button" class="btn btn-secondary" @click="selectQuiz(quiz)" />
  </div>
  </div>
</template>

<script>
import { getTheme, getListQuiz, getQuiz } from "../../data/data";
export default {
  name: "Theme",
  props: ["idTheme"],
  data: function() {
    return {
      idQuiz : null
    };
  },
  computed: {
    theme: function() {
      return getTheme(this.idTheme);
    },
    listeQuiz: function(){
      return getListQuiz(this.idTheme);
    },
    getQuiz: function(){
      return getQuiz(this.getQuiz);
    },
  },
  methods: {
    selectQuiz: function(quiz){
      this.quiz = quiz;
      this.$emit("select-quiz", quiz.id);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quiz-title-bloc {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.quiz-title-text {
  margin: 0;
}
</style>
