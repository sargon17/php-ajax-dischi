// new vue instance
const app = new Vue({
  el: "#app",
  data() {
    return {
      // default values
      message: "hello world",
      discs: [],
      genres: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost/php-ajax-dischi/fullList.php")
      .then((response) => {
        this.discs = response.data;
      });
    axios
      .get("http://localhost/php-ajax-dischi/genres.php")
      .then((response) => {
        this.genres = response.data;
      });
  },
  methods: {
    getFilteredDiscs(filter, value) {
      let params = {
        filterType: filter,
        filterValue: value,
      };
      axios
        .get("http://localhost/php-ajax-dischi/filterBy.php", { params })
        .then((response) => {
          this.discs = response.data;
        });
    },
  },
});

// "http://localhost/php-ajax-dischi/filterBy.php?filterType=genre%filterValue=Metal"
