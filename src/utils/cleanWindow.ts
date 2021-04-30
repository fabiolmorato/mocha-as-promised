export function mockWindowFunction(getConsole: CallableFunction = () => {}): string {
  return `
  window.console.log = ${getConsole}
  window.console.assert = ${getConsole}
  window.console.clear = ${getConsole}
  window.console.context = ${getConsole}
  window.console.count = ${getConsole}
  window.console.countReset = ${getConsole}
  window.console.debug = ${getConsole}
  window.console.dir = ${getConsole}
  window.console.dirxml = ${getConsole}
  window.console.error = ${getConsole}
  window.console.group = ${getConsole}
  window.console.groupCollapsed = ${getConsole}
  window.console.groupEnd = ${getConsole}
  window.console.info = ${getConsole}
  window.console.profile = ${getConsole}
  window.console.profileEnd = ${getConsole}
  window.console.table = ${getConsole}
  window.console.time = ${getConsole}
  window.console.timeEnd = ${getConsole}
  window.console.timeLog = ${getConsole}
  window.console.timeStamp = ${getConsole}
  window.console.trace = ${getConsole}
  window.console.warn = ${getConsole}
  console.log = ${getConsole}
  console.assert = ${getConsole}
  console.clear = ${getConsole}
  console.context = ${getConsole}
  console.count = ${getConsole}
  console.countReset = ${getConsole}
  console.debug = ${getConsole}
  console.dir = ${getConsole}
  console.dirxml = ${getConsole}
  console.error = ${getConsole}
  console.group = ${getConsole}
  console.groupCollapsed = ${getConsole}
  console.groupEnd = ${getConsole}
  console.info = ${getConsole}
  console.profile = ${getConsole}
  console.profileEnd = ${getConsole}
  console.table = ${getConsole}
  console.time = ${getConsole}
  console.timeEnd = ${getConsole}
  console.timeLog = ${getConsole}
  console.timeStamp = ${getConsole}
  console.trace = ${getConsole}
  console.warn = ${getConsole}
  window.alert = () => {};
  alert = () => {};
  window.open = () => {};
  window.close = () => {};
  window.moveTo = () => {};
  window.resizeTo = () => {};
  window.onload = () => {};
  window.atob = () => {};
  window.blur = () => {};
  window.btoa = () => {};
  window.print = () => {};
  window.cancelAnimationFrame = () => {};
  window.cancelIdleCallback = () => {};
  window.prompt = () => {};
  window.postMessage = () => {};
  window.queueMicrotask = () => {};
  window.showDirectoryPicker = () => {};
  window.showOpenFilePicker = () => {};
  window.showSaveFilePicker = () => {};
  window.stop = () => {};
  window.Cache = () => {};
  window.CookieStore = () => {};
  window.CacheStorage = () => {};
  window.CookieStoreManager = () => {};
  window.CacheStorage = () => {};
  window.Credential = () => {};
  window.CredentialsContainer = () => {};
  window.Crypto = () => {};
  window.Geolocation = () => {};
  window.GeolocationPosition = () => {};
  window.GeolocationPositionError = () => {};
  window.ImageCapture = () => {};
  window.PaymentAddress = () => {};
  window.PaymentInstruments = () => {};
  window.globalThis = () => {};
  window.PaymentManager = () => {};
  window.PaymentMethodChangeEvent = () => {};
  window.PaymentRequest = () => {};
  window.PaymentRequestUpdateEvent = () => {};
  window.Storage = () => {};
  window.StorageEvent = () => {};

  window.clientInformation = {};
  window.sessionStorage = {};
  window.navigator = {};
  window.LUX = {};
  window.location = {};
  window.localStorage = () => {};
  localStorage = () => {};
  window.caches = {};
  window.cookieStore = {};
  window.webkitStorageInfo = {};
  prompt = () => {};
  navigator = () => {};
  storage = () => {};
  location = () => {};
  storage = () => {};
  webkitStorageInfo = () => {};
  webkitStorageInfo = () => {};
  webkitStorageInfo = () => {};
  Geolocation = () => {};
  GeolocationPosition = () => {};
  GeolocationPositionError = () => {};
  ImageCapture = () => {};
  PaymentAddress = () => {};
  PaymentInstruments = () => {};
  globalThis = () => {};
  PaymentManager = () => {};
  PaymentMethodChangeEvent = () => {};
  PaymentRequest = () => {};
  PaymentRequestUpdateEvent = () => {};
  Storage = () => {};
  StorageEvent = () => {};
  open = () => {};
  close = () => {};
  moveTo = () => {};
  resizeTo = () => {};
  onload = () => {};
  atob = () => {};
  blur = () => {};
  btoa = () => {};
  print = () => {};
  `;
}
