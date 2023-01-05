import { Request, Response } from 'express';
import { cache_key, remoteTxtURL } from '../data';
import { findWords } from '../utils';
const https = require("https");
var mcache = require('memory-cache');

exports.processWord = async (req: Request, res: Response) => {
    try {
        // getting the cached data
        let cachedBody = mcache.get(cache_key);

        // checking if cache data exists
        if (cachedBody) {

            const result = findWords(cachedBody, req.body.sentence);

            if (result === true) return res.status(200).json({ data: [], msg: 'Ok', status: 'success' });
            else return res.status(200).json({ data: result, msg: 'Ok', status: 'success' });

        } else {

            // fetching txt file from remote
            https.get(remoteTxtURL, (response: any) => {
                let data = '';

                // A chunk of data has been received.
                response.on('data', (chunk: string) => {
                    data += chunk;
                });

                // The whole response has been received.
                response.on('end', () => {
                    const array = data.split('\n');

                    // cache the result
                    mcache.put(cache_key, array, 300 * 1000);

                    const result = findWords(array, req.body.sentence);

                    if (result === true) return res.status(200).json({ data: [], msg: 'Ok', status: 'success' });
                    else return res.status(200).json({ data: result, msg: 'Ok', status: 'success' });
                });
            });
        }
    } catch (err) {
        console.error(err)
    }
}
