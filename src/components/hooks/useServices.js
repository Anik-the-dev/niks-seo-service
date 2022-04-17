import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch("serviceData.json")
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return [service, setService]
};

export default useServices;