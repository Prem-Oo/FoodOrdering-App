import { useState, useEffect } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        const handleOnline = (state) => {
            setIsOnline(state);
        }
        window.addEventListener("online", () => { handleOnline(true) })
        window.addEventListener("offline", () => { handleOnline(false) })
        return () => {
            window.removeEventListener("online", handleOnline(true))
            window.removeEventListener("offline", handleOnline(false))
        }
    }, [])

    return isOnline;
}
export default useOnline;