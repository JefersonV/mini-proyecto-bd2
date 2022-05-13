import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import withReactContent from 'sweetalert2-react-content'
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { db } from '../firebase-content/firebase'

const MySwal = withReactContent(Swal)

const Show = () => {
  const [productos, setProductos] = useState([])

  //Referencia a la db de firebase
  const productosColeccion = collection(db, 'productos') 
   //Función para mostrar los productos
  const getProductos = async () => {
    const data = await getDocs(productosColeccion)
    // console.log(data.docs)

  setProductos(
    data.docs.map( (doc) => ( { ...doc.data(), id: doc.id } ))
  ) 
  console.log(productos)
  }

  const deleteProduct = (id) => {
    const productoEliminar = doc(db, 'productos', id)
    deleteDoc(productoEliminar)
    getProductos()
  }

  useEffect( () => {
    getProductos()
  }, [])
  //Sweet alert
  const confirmDelete = (id) => { 
    MySwal.fire({
      title: '¿Estás seguro que quieres eliminar el Producto?',
      text: "No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id)
        Swal.fire(
          'Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        )
      }
    })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <Link to="/create" className="btn btn-primary">Regitrar</Link>
              <table className="table">
              <thead>
                <tr>
                  <th scope="col">Descripción</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map( (producto) => (
                  <tr key={producto.id}>
                    <td>{producto.description}</td>
                    <td>{producto.stock}</td>
                    <td>
                      <Link to={`/edit/${producto.id}</td>`} className="btn btn-secondary"><i className="fa-solid fa-pen-to-square"></i></Link>
                      <button onClick={() => confirmDelete(producto.id)} className="btn btn-danger mx-2"><i className="fa-solid fa-trash-can"></i></button>
                    </td>
                  </tr>  
              ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  

}

export default Show