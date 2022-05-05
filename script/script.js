// new vue instance
const app = new Vue({
  el: "#app",
  data() {
    return {
      // default values
      message: "hello world",
      discs: [],
    };
  },
  mounted() {
    axios.get("http://localhost/php-ajax-dischi/data.php").then((response) => {
      this.discs = response.data;
    });
  },
});
