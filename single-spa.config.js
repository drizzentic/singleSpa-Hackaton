<<<<<<< Updated upstream
// import * as singleSpa from 'single-spa'
=======
//Register Applications
>>>>>>> Stashed changes

// singleSpa.registerApplication('navbar', window.navbar.default, location => true)

<<<<<<< Updated upstream
// singleSpa.registerApplication('app1', window.app1.default, location => location.pathname.startsWith('/app1'))

// singleSpa.registerApplication('app2', window.app2.default, location => location.pathname.startsWith('/app2'))
=======
singleSpa.registerApplication('patientDashboard', window.app1.default, location => location.pathname.startsWith('/app1'))

singleSpa.registerApplication('patientSearch', window.app2.default, location => location.pathname.startsWith('/app2'))
>>>>>>> Stashed changes

// singleSpa.start();
