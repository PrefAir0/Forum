import React, { useEffect } from "react";
import { $cats, loadCatsFx } from "../store/Catsstore";
import CatCard from "./CatCard";
import { useUnit } from "effector-react";

const CatList: React.FC = () => {
    const cats = useUnit($cats);

    useEffect(() => {
        loadCatsFx();
    }, []);

    return (
        <div>
            {cats.map((cat) => (
                <CatCard key={cat.id} cat={cat} />
            ))}
        </div>
    );
};

export default CatList;
