---
layout: default
title: Photo Sphere Viewer 1
permalink: /photo-sphere-viewer-1/

external-css :
  - /assets/Photo-Sphere-Viewer/core/index.css

# external-js :
#   - none


---

Home : [Photo Sphere Viewer](https://photo-sphere-viewer.js.org/)

<!-- the viewer container must have a defined size -->
<div id="viewer" style="width: 70vw; height: 70vh;"></div>

<script type="importmap">
    {
        "imports": {
            "three": "https://cdn.jsdelivr.net/npm/three/build/three.module.js",
            "@photo-sphere-viewer/core": "https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.module.js"
        }
    }
</script>

<script type="module">
    import { Viewer } from '@photo-sphere-viewer/core';

    const viewer = new Viewer({
        container: document.querySelector('#viewer'),
        panorama: '/img/PXL_20260615_062848861.PHOTOSPHERE.jpg',
    });
</script>
