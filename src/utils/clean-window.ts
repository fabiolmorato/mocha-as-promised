export function mockWindowFunction(): string {
  return `
  var window = {};
  var alert = () => {};
  var prompt = () => {};
  var navigator = () => {};
  var localStorage = () => {};

  console.assert = () => {}
  console.clear = () => {}
  console.context = () => {}
  console.count = () => {}
  console.countReset = () => {}
  console.dir = () => {}
  console.dirxml = () => {}
  console.group = () => {}
  console.groupCollapsed = () => {}
  console.groupEnd = () => {}
  console.profile = () => {}
  console.profileEnd = () => {}
  console.table = () => {}
  console.time = () => {}
  console.timeEnd = () => {}
  console.timeLog = () => {}
  console.timeStamp = () => {}
  console.trace = () => {}

  window.console = {};
  window.console.log = () => {}
  window.console.assert = () => {}
  window.console.clear = () => {}
  window.console.context = () => {}
  window.console.count = () => {}
  window.console.countReset = () => {}
  window.console.debug = () => {}
  window.console.dir = () => {}
  window.console.dirxml = () => {}
  window.console.error = () => {}
  window.console.group = () => {}
  window.console.groupCollapsed = () => {}
  window.console.groupEnd = () => {}
  window.console.info = () => {}
  window.console.profile = () => {}
  window.console.profileEnd = () => {}
  window.console.table = () => {}
  window.console.time = () => {}
  window.console.timeEnd = () => {}
  window.console.timeLog = () => {}
  window.console.timeStamp = () => {}
  window.console.trace = () => {}
  window.console.warn = () => {}
  window.alert = () => {};
  window.print = () => {};
  window.prompt = () => {};
  window.postMessage = () => {};
  window.queueMicrotask = () => {};
  window.showDirectoryPicker = () => {};
  window.showOpenFilePicker = () => {};
  window.showSaveFilePicker = () => {};
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
  window.PaymentManager = () => {};
  window.PaymentMethodChangeEvent = () => {};
  window.PaymentRequest = () => {};
  window.PaymentRequestUpdateEvent = () => {};
  window.Storage = () => {};
  window.StorageEvent = () => {};
  window.localStorage = () => {};
  window.caches = {};
  window.cookieStore = {};
  window.webkitStorageInfo = {};

  var webkitStorageInfo = () => {};
  var webkitStorageInfo = () => {};
  var webkitStorageInfo = () => {};
  var Geolocation = () => {};
  var GeolocationPosition = () => {};
  var GeolocationPositionError = () => {};
  var ImageCapture = () => {};
  var PaymentAddress = () => {};
  var PaymentInstruments = () => {};
  var PaymentManager = () => {};
  var PaymentMethodChangeEvent = () => {};
  var PaymentRequest = () => {};
  var PaymentRequestUpdateEvent = () => {};
  var Storage = () => {};
  var StorageEvent = () => {};
  var print = () => {};
  `;
}
