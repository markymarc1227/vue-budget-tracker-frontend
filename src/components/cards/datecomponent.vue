<template>
  <div id="intro">
    <div ma-3>
      <h2 class="font-weight-light pt-4 white--text">
        {{ timestamp }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "dateComp",
  ref: "intro",
  data() {
    return {
      timestamp: "",
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function () {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const dateTime = date;
      this.timestamp = dateTime;
    },
  },
};
</script>
