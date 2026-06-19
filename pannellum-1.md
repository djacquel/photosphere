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
    "preview": "/img/logo-chemins-de-traverse.png",
    "autoLoad": true,
    "autoRotate": -2,
    "title": "Chemins de traverse",
    "author": "David Jacquel",
    "compass": true,

    /*
     * Uncomment the next line to print the coordinates of mouse clicks
     * to the browser's developer console, which makes it much easier
     * to figure out where to place hot spots. Always remove it when
     * finished, though.
     */
    "hotSpotDebug": true,



});
</script>
