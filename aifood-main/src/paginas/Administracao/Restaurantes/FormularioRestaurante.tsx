import { Box, Typography, TextField, Button } from '@mui/material';
import { Method } from 'axios';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import http from '../../../http';
import IRestaurante from '../../../interfaces/IRestaurante';

const FormularioRestaurante = () => {
  const params = useParams();
  const [nome, setNome] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      http.get<IRestaurante>(`/v2/restaurantes/${params.id}/`)
        .then(resposta => setNome(resposta.data.nome))
    }
  }, [params])

  const aoSubmeterForm = (evento: SyntheticEvent) => {
    evento.preventDefault()
    let url = '/v2/restaurantes/'
    let method: Method = 'POST'
    if (params.id) {
      method = 'PUT'
      url += `${params.id}/`
    }
    http.request({
      url,
      method,
      data: {
        nome
      }
    }).then(() => {
      navigate('/dashboard/restaurantes')
    })    
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h6">
          Formulário de restaurante
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={aoSubmeterForm}>
          <TextField
            required
            value={nome}
            onChange={evento => setNome(evento.target.value)}
            margin='dense'
            id="nome"
            label="Nome"
            type="text"
            fullWidth />
          <Button type='submit' fullWidth variant="contained">Salvar</Button>
        </Box>
      </Box>
    </>
  );
}

export default FormularioRestaurante