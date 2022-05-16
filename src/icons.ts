export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/icons/${src}.${type}`, import.meta.url).href;

const icons = {
  accountSettings: imgSrc("account-settings"),
  addAnnotation: imgSrc("add-annotation-icon"),
  add: imgSrc("add-icon"),
  annotate: imgSrc("annotate"),
  annotationLabel: imgSrc("annotation-label-icon"),
  annotationLabels: imgSrc("annotation-labels-icon"),
  annotationTransparency: imgSrc("annotation-transparency-icon"),
  autoAssign: imgSrc("auto-assign-assignees"),
  audit: imgSrc("audit"),
  arrowDown: imgSrc("down-arrow"),
  arrowLeft: imgSrc("left-arrow"),
  arrowRight: imgSrc("right-arrow"),
  arrowUp: imgSrc("up-arrow"),
  backspace: imgSrc("backspace-icon"),
  backspaceKey: imgSrc("backspace-key"),
  backgroundSettings: imgSrc("background-settings"),
  betaStatus: imgSrc("beta-status"),
  bezierSpline: imgSrc("bezier-spline"),
  boundingBox: imgSrc("bounding-box-icon"),
  breadcrumbTrailArrow: imgSrc("breadcrumb-trail-arrow"),
  brightness: imgSrc("brightness-icon"),
  brush: imgSrc("brush-icon"),
  brush3D: imgSrc("brush3"),
  channels: imgSrc("channels-icon"),
  closeSpline: imgSrc("close-spline-icon"),
  cog: imgSrc("cog"),
  collaborators: imgSrc("collaborators"),
  collectionsViewerToggle: imgSrc("collections-viewer-toggle"),
  complete: imgSrc("complete"),
  contrast: imgSrc("contrast-icon"),
  convert: imgSrc("convert-icon"),
  copy: imgSrc("copy"),
  curate: imgSrc("curate"),
  deleteAnnotation: imgSrc("delete-annotation-icon"),
  delete: imgSrc("delete"),
  deselectAllLabels: imgSrc("deselect-all-labels"),
  displayUnlabelledImages: imgSrc("display-unlabelled-images"),
  documentHelp: imgSrc("document-help"),
  download: imgSrc("download-icon"),
  edit: imgSrc("open-in-annotate"),
  eraser: imgSrc("eraser-icon"),
  enterKey: imgSrc("enter-key"),
  fill: imgSrc("fill-icon"),
  fitToPage: imgSrc("fit-to-page-icon"),
  helpCenter: imgSrc("help-center"),
  imageViewer: imgSrc("image-viewer"),
  keyboardShortcut: imgSrc("keyboard-shortcut"),
  largeImageGrid: imgSrc("large-image-grid"),
  lassoSpline: imgSrc("lasso-spline-icon"),
  magicSpline: imgSrc("magic-spline-icon"),
  maximise: imgSrc("maximise-icon"),
  mediumImageGrid: imgSrc("medium-image-grid"),
  minimise: imgSrc("minimise-icon"),
  multipleImageSelection: imgSrc("multiple-image-selection"),
  navigationANNOTATE: imgSrc("navigationANNOTATE"),
  navigationAUDIT: imgSrc("navigationAUDIT"),
  navigationCURATE: imgSrc("navigationCURATE"),
  navigationMANAGE: imgSrc("navigationMANAGE"),
  openInAudit: imgSrc("open-in-audit"),
  paste: imgSrc("paste"),
  pin: imgSrc("pin"),
  plugins: imgSrc("plugins"),
  projectsPage: imgSrc("projects-page"),
  rectangleBoundaryBox: imgSrc("rectangle-boundary-box-icon"),
  redo: imgSrc("redo-icon"),
  removeLabel: imgSrc("remove-label-icon"),
  returnTo: imgSrc("return-to-icon"),
  returnToWebsiteHome: imgSrc("return-to-website-home"),
  save: imgSrc("save-icon"),
  searchFilter: imgSrc("search-filter"),
  search: imgSrc("search"),
  selectAllLabels: imgSrc("select-all-labels"),
  selectedTickbox: imgSrc("channel-select-icon"),
  notSelectedTickbox: imgSrc("chanel-deselected-icon"),
  select: imgSrc("select-icon"),
  selectedChip: imgSrc("active-annotation-label-search-filter"),
  notSelectedChip: imgSrc("non-active-annotation-label-search-filter"),
  shiftKey: imgSrc("shift-key"),
  showHidePassword: imgSrc("show-hide-password"),
  showStrokeAsPixels: imgSrc("show-strokes-as-pixels"),
  smallImageGrid: imgSrc("small-image-grid"),
  spline: imgSrc("spline-icon"),
  table: imgSrc("table"),
  trustedServices: imgSrc("AI-in-the-loop"),
  undo: imgSrc("undo-icon"),
  upload: imgSrc("upload-icon"),
  usersPage: imgSrc("user"),
  warning: imgSrc("warning"),
  zoomIn: imgSrc("zoom-in-icon"),
  zoomOut: imgSrc("zoom-out-icon"),
  tick: imgSrc("tick"),
  previousNext: imgSrc("previous-next"),
} as const;

export { icons };
