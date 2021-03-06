/**
 * Created by dell on 2018-02-06.
 */
const express = require('express'),
    next = require('next');
const dev = process.env.NODE_ENV !== 'production',
    app = next({dev}),
    handle = app.getRequestHandler();
app.prepare()
    .then(() => {
        const server = express();
        server.get('/p/:id', (req, res) => {
            const actualPage = '/post';
            const queryParams = {id: req.params.id};
            app.render(req, res, actualPage, queryParams)
        });
        server.get('*', (req, res) => {
            return handle(req, res);
        });
        server.listen(3000, err => {
            if (err)throw err;
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch(ex => {
        console.log(ex.stack);
        process.exit(1);
    });