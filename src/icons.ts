export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/icons/${src}.${type}`, import.meta.url).href;

const icons = {
  accountSettings: imgSrc("account-settings"),
  activeAnnotationLabelSearchFilter: imgSrc("active-annotation-label-search-filter"),
  addAnnotation: imgSrc("add-annotation-icon"),
  add: imgSrc("add-icon"),
  addLabel: imgSrc("add-label-icon"),
  annotate: imgSrc("annotate"),
  annotationLabel: imgSrc("annotation-label-icon"),
  annotationLabels: imgSrc("annotation-labels-icon"),
  annotationTransparency: imgSrc("annotation-transparency-icon"),
  audit: imgSrc("audit"),
  backspace: imgSrc("backspace-icon"),
  boundingBox: imgSrc("bounding-box-icon"),
  breadcrumbTrailArrow: imgSrc("breadcrumb-trail-arrow"),
  brightness: imgSrc("brightness-icon"),
  brush: imgSrc("brush-icon"),
  chanelDeselected: imgSrc("chanel-deselected-icon"),
  chanels: imgSrc("chanels-icon"),
  channelSelect: imgSrc("channel-select-icon"),
  channels: imgSrc("channels-icon"),
  closeSpline: imgSrc("close-spline-icon"),
  collaborators: imgSrc("collaborators"),
  collectionsViewerToggle: imgSrc("collections-viewer-toggle"),
  contrast: imgSrc("contrast-icon"),
  convert: imgSrc("convert-icon"),
  convertSplineToPaintbrush: imgSrc("convert-spline-to-paintbrush-icon"),
  convertStrokeToPixels: imgSrc("convert-stroke-to-pixels"),
  createNewProject: imgSrc("create-new-project"),
  curate: imgSrc("curate"),
  deleteAnnotation: imgSrc("delete-annotation-icon"),
  delete: imgSrc("delete"),
  deselectAllLabels: imgSrc("deselect-all-labels"),
  displayUnlabelledImages: imgSrc("display-unlabelled-images"),
  documentHelp: imgSrc("document-help"),
  download: imgSrc("download-icon"),
  editAnnotationLabels: imgSrc("edit-annotation-labels"),
  editDetails: imgSrc("edit-details"),
  editProject: imgSrc("edit-project"),
  eraser: imgSrc("eraser-icon"),
  fill: imgSrc("fill-icon"),
  fitToPage: imgSrc("fit-to-page-icon"),
  imageViewer: imgSrc("image-viewer"),
  largeImageGrid: imgSrc("large-image-grid"),
  lassoSpline: imgSrc("lasso-spline-icon"),
  magicSpline: imgSrc("magic-spline-icon"),
  maximise: imgSrc("maximise-icon"),
  maximiseMap: imgSrc("maximise-map-icon"),
  mediumImageGrid: imgSrc("medium-image-grid"),
  minimise: imgSrc("minimise-icon"),
  minimiseMap: imgSrc("minimise-map-icon"),
  multipleImageSelection: imgSrc("multiple-image-selection"),
  newAnnotation: imgSrc("new-annotation-icon"),
  nonActiveAnnotationLabelSearchFilter: imgSrc("non-active-annotation-label-search-filter"),
  notSelectedTickbox: imgSrc("not-selected-tickbox-icon"),
  openInAnnotate: imgSrc("open-in-annotate"),
  openInAudit: imgSrc("open-in-audit"),
  pin: imgSrc("pin-icon"),
  plugins: imgSrc("plugins"),
  projectsPage: imgSrc("projects-page"),
  rectangleBoundaryBox: imgSrc("rectangle-boundary-box-icon"),
  redo: imgSrc("redo-icon"),
  removeLabel: imgSrc("remove-label-icon"),
  resetZoomAndPan: imgSrc("reset-zoom-and-pan-icon"),
  returnTo: imgSrc("return-to-icon"),
  returnToManage: imgSrc("return-to-manage"),
  returnToWebsiteHome: imgSrc("return-to-website-home"),
  saveAnnotations: imgSrc("save-annotations-icon"),
  save: imgSrc("save-icon"),
  searchFilter: imgSrc("search-filter"),
  search: imgSrc("search"),
  selectAllLabels: imgSrc("select-all-labels"),
  selectedTickbox: imgSrc("selected-tickbox-icon"),
  select: imgSrc("select-icon"),
  showHidePassword: imgSrc("show-hide-password"),
  smallImageGrid: imgSrc("small-image-grid"),
  spline: imgSrc("spline-icon"),
  trustedServices: imgSrc("trusted-services-icon"),
  trustedServices: imgSrc("trusted-services"),
  undo: imgSrc("undo-icon"),
  upload: imgSrc("upload-icon"),
  usersPage: imgSrc("users-page"),
  warning: imgSrc("warning"),
  zoomIn: imgSrc("zoom-in-icon"),
  zoomOut: imgSrc("zoom-out-icon"),
} as const;

export { icons };
