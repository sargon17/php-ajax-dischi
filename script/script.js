// new vue instance
const app = new Vue({
  el: "#app",
  data() {
    return {
      // default values
      message: "hello world",
      dischi: [],
    };
  },
  method: {
    getData() {
      axios
        .get("http://localhost/php-ajax-dischi/data.php")
        .then((response) => {
          console.log(response.data);
        });
    },
  },
  mounted() {
    this.getData();
  },
});
