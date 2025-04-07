const express = require("express");
const { updateTodo } = require("./types");
const { createServerParamsForRoute } = require("next/dist/server/request/params");
const app = express()

app.use(express.json());

app.post('/todos', (res,req) => {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayload);
    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You sent the wrond inputs"
        })
        return;
    }
})

app.get('/todos', (res,req) => {

})

app.put('/completed', (res,req) => {

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayloadPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})