import { rest } from 'msw';

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
	);
});
