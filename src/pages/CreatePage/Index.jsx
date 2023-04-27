import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

export function CreatePage () {
   
  const [form, setForm] = useState({

      nome:"",
      imageURL:"",
      sobre:"",

    })

    const navigate = useNavigate()

    function handleChange(e) {
      setForm({...form,[e.target.name]: e.target.value})
    }

   async function handleSubmit(e){
    e.preventDefault()
    
    try{
      await api.post("/plants",{data:{...form}});
      navigate("/Plants")
    }
   
   catch (e) {
    console.log(e)
   }
  }

  return (
    <>
    <h3>Insira abaixo as informações sobre a espécie</h3>
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
