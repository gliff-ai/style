export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/icons/${src}.${type}`, import.meta.url).href;

const icons = {
  add: imgSrc("add-icon"),
  deleteAnnotation: imgSrc("delete-annotation-icon"),
  pin: imgSrc("pin-icon"),
  annotationLabel: imgSrc("annotation-label-icon"),
  download: imgSrc("download-icon"),
  redo: imgSrc("redo-icon"),
  backspace: imgSrc("backspace-icon"),
  eraser: imgSrc("eraser-icon"),
  resetZoomAndPan: imgSrc("reset-zoom-and-pan-icon"),
  boundingBox: imgSrc("bounding-box-icon"),
  fill: imgSrc("fill-icon"),
  save: imgSrc("save-icon"),
  brightness: imgSrc("brightness-icon"),
  selectedTickbox: imgSrc("selected-tickbox-icon"),
  brush: imgSrc("brush-icon"),
  lassoSpline: imgSrc("lasso-spline-icon"),
  select: imgSrc("select-icon"),
  magicSpline: imgSrc("magic-spline-icon"),
  spline: imgSrc("spline-icon"),
  channels: imgSrc("channels-icon"),
  maximise: imgSrc("maximise-icon"),
  undo: imgSrc("undo-icon"),
  closeSpline: imgSrc("close-spline-icon"),
  minimise: imgSrc("minimise-icon"),
  upload: imgSrc("upload-icon"),
  contrast: imgSrc("contrast-icon"),
  newAnnotation: imgSrc("new-annotation-icon"),
  zoomIn: imgSrc("zoom-in-icon"),
  convert: imgSrc("convert-icon"),
  notSelectedTickbox: imgSrc("not-selected-tickbox-icon"),
  zoomOut: imgSrc("zoom-out-icon"),
} as const;

export { icons };
