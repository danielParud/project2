import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';

export function EditPage () {
   
  const [form, setForm] = useState({

      nome:"",
      imageURL:"",
      sobre:"",

    })
    
    const {plantId} = useParams()
    useEffect(()=>{
        async function fetchPlant(){
         const response = await api.post('/Plants/${plantId}')
        }
        fetchPlant();
    },[])

   // const navigate = useNavigate()

    function handleChange(e) {
      setForm({...form,[e.target.name]: e.target.value})
    }

   async function handleSubmit(){}

  return (
    <>
    <h3>Editar informações</h3>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        <Form.Control name="nome" value={form.nome} onChange={handleChange} placeholder="nome da espécie"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImg">
        <Form.Label>Imagem</Form.Label>
        <Form.Control name="imageURL" value={form.imageURL} onChange={handleChange} placeholder="Image URL"/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicSobre">
      <Form.Label>Sobre</Form.Label>
        <Form.Control name="sobre" value={form.sobre} onChange={handleChange}  placeholder="Descrição sobre a espécie listada"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}