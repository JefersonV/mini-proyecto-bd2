import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase-content/firebase'


const Create = () => {
  const [description, setDescription] = useState('')
  const [stock, setStock] = useState(0)

  const navigate = useNavigate( )

  const productosColeccion = collection(db, 'productos')

  const store = async (e) => {
    e.preventDefault()
    await addDoc( productosColeccion, { description: description, stock:stock })
    navigate('/')
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Registrar producto</h1>
            <form onSubmit={store}>
              <label className="form-label" htmlFor="description-input">Descripción</label>
              <div className="mb-3">
                <input 
                  id="description-input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <input 
                type="number" 
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Create