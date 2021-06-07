<template>
  <PieChart
    :width="width"
    :height="height"
    :chart-data="data"
    :options="options"
  />
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    percentData: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {
        good: 63,
        warning: 25,
        bad: 12
      }
    }
  },
  computed: {
    data() {
      return {
        labels: ["Cầu hoạt động tốt", "Cầu cần theo dõi", "Cầu cần nâng cấp"],
        datasets: [
          {
            data: [
              this.percentData.good,
              this.percentData.warning,
              this.percentData.bad
            ],
            backgroundColor: ["#42ba96", "#ffc107", "#df4759"],
            hoverBackgroundColor: ["#20c997", "#ffc107", "#df4759"],
            borderWidth: 5,
            borderColor: this.$store.state.main.darkMode ? "#303953" : "#fff"
          }
        ]
      };
    },
    options() {
      return {
        legend: {
          display: false
        }
      };
    }
  }
};
</script>
