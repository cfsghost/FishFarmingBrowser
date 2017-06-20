const Brig = require('brig');

let brig = new Brig();

brig.on('ready', (brig) => {

	// Set UI style
	brig.app.setStyle('material');

	brig.on('window-all-closed', () => {
		process.exit();
	});

	brig.open('./qml/Application.qml', (err, window) => {
	});
});
