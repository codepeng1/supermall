<template>
  <div class="wrapper">
    <h2>分类</h2>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    // data() {
    //   return {
    //     bs: null
    //   }
    // },
    // mounted() {
    //   this.bs = new BScroll('.wrapper', {
    //     click: true,
    //     probeType: 3,
    //     pullUpLoad: true
    //   })
    //   this.bs.on('scroll', position => {
    //     // console.log(position)
    //   })
    //   this.bs.on('pullingUp', () => {
    //     console.log('上拉加载更多')
    //
    //     setTimeout(() => {
    //       this.bs.finishPullUp()
    //     }, 2000)
    //   })
    // },
    // methods: {
    //   btnClick() {
    //     console.log('btnClick')
    //   }
    // }
  }
</script>

<style scoped>
  /*.wrapper {*/
  /*  height: 150px;*/
  /*  background-color: red;*/
  /*  !*color: #fff;*!*/
  /*  overflow: hidden;*/
  /*}*/

</style>
