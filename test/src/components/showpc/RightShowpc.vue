<template>
    <div class="rightBox">
      <component v-bind:is="currentView"  class="boxson"></component>
    </div>
</template>
<script>
    import Demo from "../componentpc/demo";
    import Demo2 from "../componentpc/demo2";
    import InputSelect from "../componentpc/InputSelect";
    import Tabs from "../componentpc/Tabs";
    import Checkboxs from "../componentpc/Checkboxs";
    import Radios from "../componentpc/Radios";
    import Weather from "../componentpc/Weather";
    import FormCheck from "../componentpc/FormCheck";
    import Accordion from "../componentpc/Accordion";
    import Alerts from "../componentpc/Alerts";
    import Labels from "../componentpc/Labels";
    import Pages from "../componentpc/Pages";
    import TabSwitch from "../componentpc/TabSwitch";
    import ToolTip from "../componentpc/ToolTip";
    import Menus from '../componentpc/Menus'
    import TipSelect from "../componentpc/TipSelect";
    import ZhenAnimate from "../componentpc/ZhenAnimate";
    import TextPic from "../componentpc/TextPic";
    import ZheShan from "../componentpc/ZheShan";
    import CarZhuan from "../componentpc/CarZhuan";


    export default {
        name: "RightShowpc",
      components: {
        CarZhuan,
        ZheShan,
        TextPic,
        ZhenAnimate,
        TipSelect,
          Menus,
        ToolTip,
        TabSwitch,
        Pages,
        Labels, Alerts, Accordion, FormCheck, Weather, Radios, Checkboxs, Tabs, InputSelect, Demo2, Demo},
      props:["menuinfo","currentView"]
    }
</script>

<style lang="scss" scoped>
  .rightBox{
    width: 30%;
    float: left;
    height: 100%;
    background: #fff;

  }
  .boxson{
    width: 300px;
    margin:100px auto 0;
  }
</style>
