// Create viewer.
var viewer = new Marzipano.Viewer(document.getElementById('pano'));

// Create source.
var source = Marzipano.ImageUrlSource.fromString(
  "/assets/photosphere/PXL_20260806_084511200.PHOTOSPHERE.jpgg"
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
