<template>
  <div lass="pa-0">
    <tiptap-vuetify v-model="content" :extensions="extensions" :card-props="{ flat: true}" />
  </div>
</template>

<script>
import firebase from "firebase";

import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  TodoList,
  TodoItem
} from "tiptap-vuetify";

export default {
  name: "HelloWorld",
  components: { TiptapVuetify },
  data: () => ({
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak,
      TodoList,
      TodoItem
    ],
    content: ""
  }),
  watch: {
    content: {
      handler(val) {
        this.ref.set(val);
        document.getElementsByTagName("p").forEach(data => {
          data.setAttribute("spellcheck", "false");
        });
      }
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
    this.content = note.val();

    document.getElementsByTagName("p").forEach(data => {
      data.setAttribute("spellcheck", "false");
    });
  }
};
</script>