---
layout: default
title: Photo Sphere Viewer 1
permalink: /photo-sphere-viewer-1/

external-css :
  - /assets/Photo-Sphere-Viewer/core/index.css
  - /assets/Photo-Sphere-Viewer/compass-plugin/index.css
# external-js :
#   - none


---

Home : [Photo Sphere Viewer](https://photo-sphere-viewer.js.org/)




<!-- the viewer container must have a defined size -->
<div id="viewer" style="width: 70vw; height: 70vh;"></div>

<script type="importmap">
    {
        "imports": {
            "three": "/assets/three.module.min.js",
            "@photo-sphere-viewer/core": "/assets/Photo-Sphere-Viewer/core/index.module.js",
            "@photo-sphere-viewer/compass-plugin": "/assets/Photo-Sphere-Viewer/compass-plugin/index.module.js",
            "@photo-sphere-viewer/visible-range-plugin": "/assets/Photo-Sphere-Viewer/visible-range-plugin/index.module.js"
        }
    }
</script>

<script type="module">
    import { Viewer } from '@photo-sphere-viewer/core';
    import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin';
    import { VisibleRangePlugin } from '@photo-sphere-viewer/visible-range-plugin';

    const viewer = new Viewer({
        container: document.querySelector('#viewer'),
        panorama: '/img/PXL_20260615_062848861.PHOTOSPHERE.jpg',
        plugins: [
            VisibleRangePlugin.withConfig({
                verticalRange: [-Math.PI / 3, Math.PI / 3],
            }),
            CompassPlugin.withConfig({
                hotspots: [
                    { yaw: '0deg' },
                    { yaw: '90deg' },
                    { yaw: '180deg' },
                    { yaw: '270deg' },
                ],
            }),
    ],
    });
</script>
