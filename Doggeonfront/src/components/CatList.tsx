import React, { useEffect, useState } from "react";

import CatCard from "./CatCard";
import type {Cat} from "../types/cats";
import { fetchCats } from "../service/catService";

const Catlist: React.FC = () => {
    const [cats, setCats] = useState<Cat[]>([])

    useEffect(() => {
        const getCats = async () => {
            const data = await fetchCats();
            setCats(data);
        };

        getCats();

    }, []) 

    return(
        <div>
            {cats.map((cat) =>
                <CatCard key={cat.id} cat={cat} />
            )}
        </div>
    )
}

export default Catlist;

