import { response, Router } from "express";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router()

function Teste(req: Request, res: Response) {
    res.status(200).send('oi')
}



router.post('/teste', (req, res) => {
    console.log(req.body)
    
    return res.status(StatusCodes.OK).json(req.body)
})

router.get('/', Teste)


export {router}