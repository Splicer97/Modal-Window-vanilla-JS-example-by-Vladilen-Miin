const modal = $.modal({
	title: 'Nikita Modal',
	closable: true,
	content: `
	<h4>Modal is working</h4>
	<p>lorem Ipsum</p>
	`,
	width: '400px',
	footerButtons: [
		{
			text: 'Ok', type: 'primary', handler() {
				console.log('Primary btn clicked')
				modal.close()
			}
		},
		{
			text: 'Cancel', type: 'danger', handler() {
				console.log('Danger btn clicked')
				modal.close()
			}
		},
	]
})