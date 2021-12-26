let fruits = [
	{ id: 1, title: 'Apple', price: 20, img: "https://techrocks.ru/wp-content/uploads/2021/03/bootstrap.png" },
	{ id: 2, title: 'Orange', price: 30, img: "https://techrocks.ru/wp-content/uploads/2021/03/bootstrap.png" },
	{ id: 3, title: 'Mango', price: 40, img: "https://techrocks.ru/wp-content/uploads/2021/03/bootstrap.png" },
]

const toHTML = fruit => `
<div class="col">
<div class="card">
	<img src="${fruit.img}" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">${fruit.title}</h5 >
		<a href="#" class="btn btn-primary" data-btn='price' data-id='${fruit.id}'>Go modal</a>
		<a href="#" class="btn btn-danger" data-btn='remove' data-id='${fruit.id}'>Delete</a>
	</div>
</div>
</div>
`

function render() {
	const html = fruits.map(fruit => toHTML(fruit)).join('')
	document.querySelector('#fruits').innerHTML = html
}
render()

// const confirmModal = $.modal({
// 	title: 'Are you sure?',
// 	closable: true,
// 	width: '400px',
// 	footerButtons: [
// 		{
// 			text: 'Cancel', type: 'secondary', handler() {
// 				confirmModal.close()
// 			}
// 		},
// 		{
// 			text: 'Delete', type: 'danger', handler() {
// 				confirmModal.close()
// 			}
// 		}
// 	]
// })
const priceModal = $.modal({
	title: 'Nikita Modal',
	closable: true,
	width: '400px',
	footerButtons: [
		{
			text: 'Close', type: 'primary', handler() {
				priceModal.close()
			}
		}
	]
})

document.addEventListener('click', event => {
	event.preventDefault()
	const btnType = event.target.dataset.btn
	const id = +event.target.dataset.id
	const fruit = fruits.find(f => f.id === id)
	console.log(`fruit`, fruit)
	if (btnType === 'price') {
		priceModal.setContent(`
		<p>Price for ${fruit.title}: <strong>${fruit.price}$</strong></p>
		`)
		priceModal.open()
	}
	else if (btnType === 'remove') {
		// confirmModal.setContent(`
		// <p>You deleting this fruit: <strong>${fruit.title}$</strong></p>
		// `)

		// confirmModal.open()

		$.confirm({
			title: 'Are you sure you want to delete this fruit?',
			content: `<p>You deleting this fruit: <strong>${fruit.title}$</strong></p>`
		}).then(() => {
			fruits = fruit.filter(f => f.id !== id)
			render()
			console.log('remove')
		}).catch(() => {
			console.log('cancel')
		});
	}
})