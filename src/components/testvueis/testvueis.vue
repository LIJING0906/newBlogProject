<template>
    <div id="testvueis" style="margin-left:50px;">
        <p>这是 is="XXXX" 的栗子:</p>
        <div is="componentA"></div>
        <!-- <componentA is="componentA"></componentA> -->
        <!-- <componentA is="componentB"></componentA> -->
        <hr>
        <p>这是 :is="two" 的栗子:</p>
        <p :is="two"></p>
        <!-- <componentB :is="two"></componentB> -->
    </div>
</template>
<script>
import componentA from './component/componentA.vue'
import componentB from './component/componentA.vue'
export default {
    data() {
      return {
        // two: "componentA",
        two: componentA,
        // two: "componentB",
        // two: componentB,
      }
    },
    components: {
        componentA,
        componentB,
    },
}
</script>
