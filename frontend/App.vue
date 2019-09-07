<template>
  <div 
    id="app" 
    style="height: 100vh; width: 100vw"
    class="noselect"
  >
    <img 
      src="http://ekmair.ukma.edu.ua/bitstream/handle/123456789/11508/NAUKMA_logo_eng.jpg?sequence=5&isAllowed=y" 
      class="logo"
    />
    <router-view />
  </div>
  
</template>



<script>
import Axios from 'axios';

export default {
  
}


</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
  touch-action: none;
  font-family: Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
}

.logo {
  position: fixed;
  height: 300px;
  width: 300px;
  top: -20px;
  z-index: -1;

}

.noselect {
-webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome and Opera */
}

</style>
