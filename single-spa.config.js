import * as singleSpa from 'single-spa'

singleSpa.registerApplication('navbar', window.navbar.default, location => true)

singleSpa.registerApplication('app1', window.app1.default, location => location.pathname.startsWith('/app1'))

singleSpa.registerApplication('app2', window.app2.default, location => location.pathname.startsWith('/app2'))

singleSpa.start();
