<template>
  <div lass="pa-0">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @input="save()"></ckeditor>
  </div>
</template>

<script>
import firebase from "firebase";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
// import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
// import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
// import Font from "@ckeditor/ckeditor5-font/src/font";

export default {
  name: "HelloWorld",

  data: () => ({
    editor: ClassicEditor,
    editorData: "",
    editorConfig: {
      // The configuration of the editor.
    }
  }),
  methods: {
    save() {
      this.ref.set(this.editorData);
    }
  },
  computed: {
    ref() {
      return firebase.database().ref("note");
    }
  },
  async mounted() {
    const note = await this.ref.once("value");
    console.log(note.val());

    this.editorData = note.val();

    // this.ref.once("value").then(function(snapshot) {
    //   console.log(snapshot.val());
    // });
  }
  // ,
  // components: {
  //   ckeditor: ClassicEditor.component
  // }
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
