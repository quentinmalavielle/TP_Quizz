<template>
<div>
    <div>Quiz : {{idQuiz}}</div>
    <div v-if="quiz"></div>
</div>
</template>
<script>

import {getQuizAjax} from '../../data/ajax';

export default {
    name: "Quiz",
    props: ["idQuiz"],
    data: function(){
        return {};
    },
    computed: {
        quiz: function() {
            return getQuizAjax(this.idQuiz);
        }
    }

}
</script>

<style scoped>
.quiz-title-bloc {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.quiz-title-text {
  margin: 0;
}
</style>