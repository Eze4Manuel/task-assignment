import React, { useState } from "react";
import TextArea from "../../components/textarea";
import Button from "../../components/button"
import Spinner from "../../components/spinner"
import lib from '../../api/api_home';
import formValidator from './validation';

const Home = () => {
    const [value, setValue] = useState({});
    const [error, setError] = useState('');
    const [reply, setReply] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCheckWording = () => {
        (async () => {
            let builder = formValidator.validateWordChecker(value, {}, setError)
            if (!builder) {
                return
            }
            setLoading(true);
            setReply('');

            // making request to the backend
            let reqData = await lib.checkWordings(value);
            if (reqData.status === "error") {
                setError(reqData.msg)
            }
            if (reqData.status === 'success') {
                if (reqData.data?.length > 0) {
                    setReply(reqData.data.join(', '))
                }
            }
            setLoading(false);
        })()
    }

    return (
        <div>
            <TextArea
                label={"Enter English Text"}
                labelStyles={"block"}
                onChange={e => setValue(d => ({ ...d, sentence: e.target.value }))}
                className={"block border-2 border-slate-300 rounded p-2 h-40 mt-4"} />
            {!loading ?
                <>
                    <Button
                        text={"CHECK"}
                        onClick={(e) => handleCheckWording(e)}
                        className={"border-solid mt-4 p-2 border-black border rounded bg-gray-200"} />
                    <p className="text-red-600">{error}</p>
                    <p className="text-lg"> {reply ? `Non English Words: ${reply}` : reply}</p>
                </>
                :
                <Spinner
                    className={"mt-4 inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"} />
            }
        </div>
    )
}
export default Home; 
