---
layout: default
title: Marzipano 1
permalink: /marzipano-1/

# external-css :
#

external-js :
  - /assets/marzipano.js


---

Home : [Marzipano](https://www.marzipano.net/)

Good vtour tool

Doc not so clear

<style>
#pano {
  position: relative;
    width: 1000px;
    height: 600px;
}
</style>

<div id="pano"></div>

<script>
// Create viewer.
var viewer = new Marzipano.Viewer(document.getElementById('pano'));

// Create source.
var source = Marzipano.ImageUrlSource.fromString(
  "/img/PXL_20260615_062848861.PHOTOSPHERE.jpg"
);

// Create geometry.
var geometry = new Marzipano.EquirectGeometry([{ width: 1000 }]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(2048, 100*Math.PI/180);
var view = new Marzipano.RectilinearView({ yaw: Math.PI }, limiter);

// Create scene.
var scene = viewer.createScene({
  source: source,
  geometry: geometry,
  view: view,
  pinFirstLevel: true
});

// Display scene.
scene.switchTo();
</script>
