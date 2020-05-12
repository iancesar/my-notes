<template>
  <div class="ml-5 mr-5 pa-0">
    <v-textarea
      auto-grow="true"
      autofocus="true"
      full-width
      flat
      class="custom font-weight-light title"
      v-model="note"
      spellcheck="false"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    note:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nisl rutrum hendrerit fringilla. Nunc vestibulum ipsum sit amet lacus imperdiet, in commodo eros interdum. Sed non ex mauris. Nunc vestibulum sapien quis nisl scelerisque, et lacinia lorem fringilla. Aliquam scelerisque, ligula et tincidunt venenatis, est ipsum vestibulum urna, ac gravida quam erat in sapien. Ut porta vel nunc a pulvinar. Mauris dignissim diam non lorem imperdiet, vel aliquam ante vulputate. Maecenas vel tincidunt purus. Sed odio tellus, venenatis nec neque nec, ultrices ultricies mi. Quisque aliquam orci rhoncus velit consequat dignissim. Suspendisse egestas commodo tincidunt. Nunc tristique hendrerit nulla a efficitur. Donec id pharetra nunc, non vulputate diam."
  })
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
