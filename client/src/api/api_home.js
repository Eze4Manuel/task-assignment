import request from '../config/http-request';

const lib = {}

lib.checkWordings = async (value) => {
    let uri = '';
    try {
        uri = `/v1/word-check/process-word`;

        return await (await request.post(uri, value)).data
    } catch (e) {
        return { status: 'error', msg: e?.response?.data?.msg || e?.message }
    }
}
export default lib;