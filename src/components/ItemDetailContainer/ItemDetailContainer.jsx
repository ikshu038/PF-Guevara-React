import React from "react";
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const document = doc(db, "products", idItem);
    
    getDoc(document)
      .then(res => setProduct(res.data())) // No busco el ID tambien ya que ademas del id del documento el objeto tambien tiene uno (es el mismo)
  }, [idItem])


  return (
    <div className="container">
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer