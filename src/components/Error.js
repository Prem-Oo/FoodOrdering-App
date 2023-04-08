import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    // useRouteError is used to show better errors to UI
    // console.log(err)
    return <>
        <h1>"OOPS!"</h1>
        <h1>
            something went wrong!
        </h1>
        <h2 >{err.status + " " + err.statusText}</h2>
        <h2>{err.data}</h2>
    </>
}

export default Error;