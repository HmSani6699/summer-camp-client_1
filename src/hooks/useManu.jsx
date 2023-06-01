import { useEffect, useState } from "react";

const useManu = () => {
    const [manu, setManu] = useState()
    const [loding, setLoding] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setManu(data);
                setLoding(false)
            })
    }, []);

    return [manu,loding]
}

export default useManu;