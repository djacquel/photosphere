---
layout: default
title: Pannellum 1
permalink: /pannellum-1/

external-css :
  - /assets/pannellum/pannellum.css

external-js :
  - /assets/pannellum/pannellum.js


---

Home : [Pannellum](https://pannellum.org/)



<style>
#panorama {
    width: 800px;
    height: 600px;
}
</style>


<div id="panorama"></div>
<script>
pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "/img/PXL_20260615_062848861.PHOTOSPHERE.jpg",
    "autoLoad": true
});
</script>
