import { rest } from 'msw'

export const addTodo = rest.post('/api/todo', async (req, res, ctx) => {
	let title, content
	await req.json().then(data => {
		title = data.title
		content = data.content
	})

	return res(
		ctx.status(200),
		ctx.json({
			id: Math.floor(Math.random() * 10000000),
			title,
			content,
			state: false,
		}),
	)
})

export const getTodos = rest.get('/api/todo', (req, res, ctx) => {
	return res(
		ctx.status(200),
		ctx.json([
			{
				id: 1,
				title: 'example',
				content: 'example',
				status: false,
			},
			{
				id: 2,
				title: 'example',
				content: 'example',
				status: false,
			},
		]),
	)
})

export const updateTodo = rest.put('/api/todo', async (req, res, ctx) => {
	const id = req.url.searchParams.get('todoId')
	let title, content

	await req.json().then(data => {
		title = data.title
		content = data.content
	})

	return res(
		ctx.status(200),
		ctx.json({
			id,
			title,
			content,
		}),
	)
})

export const deleteTodo = rest.delete(
	'/api/todo/:todoId',
	async (req, res, ctx) => {
		const { todoId } = req.params
		return res(
			ctx.status(200),
			ctx.json({
				id: todoId,
			}),
		)
	},
)
