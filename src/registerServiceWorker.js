/* eslint-disable no-console */

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
  .then(r => console.log('SW registerd'))
  .catch (console.error)
}
