import { Router } from 'express'

const router =  Router()

router.post('/post', (req, res) => {
    res.send('CREATE POST/')
})

router.get('/post/:id?', (req, res) => {
    res.send('GET POST/')
})

export default router