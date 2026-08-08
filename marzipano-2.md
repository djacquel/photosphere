---
layout: default
title: Marzipano 2
permalink: /marzipano-2/

external-css :
 - /app-files/vendors/reset.min.css
 - /app-files/style.css

external-js :
  - /app-files/vendors/screenfull.min.js
  - /app-files/vendors/bowser.min.js
  - /app-files/vendors/marzipano.js
  - /app-files/data.js
  - /app-files/index.js

---
<div id="panoContainer" class="multiple-scenes view-control-buttons">

<div id="pano"></div>

<div id="sceneList">
  <ul class="scenes">
    
  <a href="javascript:void(0)" class="scene" data-id="0-pxl_20260615_062848861photosphere">
    <li class="text">PXL_20260615_062848861.PHOTOSPHERE</li>
  </a>

  <a href="javascript:void(0)" class="scene" data-id="1-pxl_20260615_063504742photosphere">
    <li class="text">PXL_20260615_063504742.PHOTOSPHERE</li>
  </a>
    
  </ul>
</div>

<div id="titleBar">
  <h1 class="sceneName"></h1>
</div>

<a href="javascript:void(0)" id="autorotateToggle">
  <img class="icon off" src="/app-files/img/play.png">
  <img class="icon on" src="/app-files/img/pause.png">
</a>

<a href="javascript:void(0)" id="fullscreenToggle">
  <img class="icon off" src="/app-files/img/fullscreen.png">
  <img class="icon on" src="/app-files/img/windowed.png">
</a>

<a href="javascript:void(0)" id="sceneListToggle">
  <img class="icon off" src="/app-files/img/expand.png">
  <img class="icon on" src="/app-files/img/collapse.png">
</a>

<a href="javascript:void(0)" id="viewUp" class="viewControlButton viewControlButton-1">
  <img class="icon" src="/app-files/img/up.png">
</a>
<a href="javascript:void(0)" id="viewDown" class="viewControlButton viewControlButton-2">
  <img class="icon" src="/app-files/img/down.png">
</a>
<a href="javascript:void(0)" id="viewLeft" class="viewControlButton viewControlButton-3">
  <img class="icon" src="/app-files/img/left.png">
</a>
<a href="javascript:void(0)" id="viewRight" class="viewControlButton viewControlButton-4">
  <img class="icon" src="/app-files/img/right.png">
</a>
<a href="javascript:void(0)" id="viewIn" class="viewControlButton viewControlButton-5">
  <img class="icon" src="/app-files/img/plus.png">
</a>
<a href="javascript:void(0)" id="viewOut" class="viewControlButton viewControlButton-6">
  <img class="icon" src="/app-files/img/minus.png">
</a>

</div>
