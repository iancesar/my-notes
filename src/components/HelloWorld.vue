<template>
  <div class="ml-5 mr-5 pa-0">
    <v-textarea
      auto-grow
      autofocus
      full-width
      flat
      class="custom font-weight-light title"
      v-model="note"
      spellcheck="false"
      v-on:keyup="save()"
    ></v-textarea>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "HelloWorld",

  data: () => ({
    note: ""
  }),
  methods: {
    save() {
      this.ref.set(this.note);
    }
  },
  computed: {
    ref() {
      return firebase.database().ref("note");
    }
  },
  async mounted() {
    const note = await this.ref.once("value");
    this.note = note.val();

    // this.ref.once("value").then(function(snapshot) {
    //   console.log(snapshot.val());
    // });
  }
};
</script>

<style>
.custom.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none;
}
.custom.v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none;
}
</style>
