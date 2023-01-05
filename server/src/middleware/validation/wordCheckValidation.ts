
import { Request, Response, NextFunction } from 'express';
import { fieldFilters } from '../../utils';


exports.validateWordCheckerInput = (req: Request, res: Response, next: NextFunction) => {
    const types = ['sentence'];

    if (!req.body?.sentence) {
        return res.status(400).json({ msg: 'Sentence is required', status: 'failed' });
    }
    if (!(req.body?.sentence.toString().split(' ').length > 0)) {
        return res.status(400).json({ msg: 'No sentence specified', status: 'failed' });
    }
    req.body = fieldFilters(types, req.body)

    next();
}