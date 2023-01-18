import {Router} from 'express'

let router = Router()

router.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'test environment is working',
    })
})

router.post('/test/command', (req, res) => {
    console.log(req.body);

    res.json({
        status: 200,
        message: 'success',
    })
})

export default router