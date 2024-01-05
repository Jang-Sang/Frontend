import { todoMock } from "_mock_/data/todo.data";
import { rest } from "msw";

export const getTodo = rest.get("/api/todo", async (_, res, ctx)  => {
    return res(ctx.status(200), ctx.json(tocoMock));
    //front request -> response todoMock
})

export const addTodo = rest.post("/api/todo", async (req, res, ctx) => {
    let title;
    let content;

    await req.json().then((data) => {
        title = data.title;
        content = data.content;
    });

    return res(
        ctx.status(200)
        ctx.json({
            id: Math.floor(Math.random() * 1000000),
            title,
            content,
            state: false,
        })
    );
});