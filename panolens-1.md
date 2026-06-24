---
layout: default
title: Panolens 1
permalink: /panolens-1/

# external-css :
#

external-js :
  - /assets/three.min.js
  - /assets/panolens.min.js


---

Home : [Panolens](https://pchen66.github.io/Panolens/)


<div id="pano"></div>

<script>

const options = {
  "container" : "pano"
}

const panorama = new PANOLENS.ImagePanorama( '/img/PXL_20260615_062848861.PHOTOSPHERE.jpg' );
const viewer = new PANOLENS.Viewer( options );

viewer.add( panorama );

</script>
