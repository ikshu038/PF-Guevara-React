import React from "react"
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/config";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { category } = useParams()

    useEffect(() => {
        const checkIfIsSomeCategoryAndGetTheProducts = category ? query(collection(db, "products"), where("type", "==", category)) : collection(db, "products");

        getDocs(checkIfIsSomeCategoryAndGetTheProducts)
            .then(
                response => {
                    setProducts(response.docs.map(doc => doc.data())) // No busco el ID tambien ya que ademas del id del documento el objeto tambien tiene uno (es el mismo)
                }
            )

    }, [category])


    return (
        <>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer