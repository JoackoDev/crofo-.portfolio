import type { NextPage } from 'next'
import styled from '@emotion/styled'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { env } from '../next.config'

const consultSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required(),
  description: yup.string().required(),
  matter: yup.string().required()
})

const Contact: NextPage = () => {
  const ContactStyled = styled.div`
    padding: 40px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin-top: 40px;
    .formContact {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      width: 900px;
      border-radius: 20px;
      background: #f7f7f7;
      box-shadow: 0px 0px 4px var(--violeta);
      margin: 0px auto;
      padding: 20px;
      label,
      input,
      button,
      textarea {
        margin-top: 20px;
        width: 80%;
      }
      input {
        border: 1px solid #ccc;
        box-shadow: 0px 0px 3px #ccc;
        font-size: 17px;
        padding: 10px;
      }
      label {
        font-size: 20px;
        border-bottom: 2px solid var(--violeta);
        padding-bottom: 15px;
      }
      textarea {
        padding: 10px;
        border: 1px solid #ccc;
        height: 200px;
      }
      button {
        padding: 10px;
        color: white;
        border: none;
        background-color: var(--violeta);
        font-size: 20px;
        font-weight: bold;
        border-radius: 20px;
        transition: 300ms all;
        cursor: pointer;
        box-shadow: 0px 0px 4px #ccc;
      }
      button:hover {
        background-color: #5609b9;
      }
    }
  `  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(consultSchema)
  })

  const sendMail = async (data: any) => {
  }

  return (
    <ContactStyled>
      <form className="formContact" onSubmit={handleSubmit(sendMail)}>
        <h1>Contáctame</h1>
        <label htmlFor="name">Nombre Completo</label>
        <input {...register('name')} required type="text" placeholder="Nombre completo" maxLength={40} />
        <label htmlFor="email">Email</label>
        <input {...register('email')} required type="email" placeholder="Email" maxLength={50} />
        <label htmlFor="phone">Teléfono</label>
        <input {...register('phone')} required type="number" maxLength={30} placeholder="Phone" />
        <label htmlFor="matter">Asunto</label>
        <input {...register('matter')} required type="text" placeholder="Asunto" maxLength={40} />
        <label htmlFor="description">Descripción</label>
        <textarea {...register('description')} required placeholder="Descripción" maxLength={600}></textarea>
        <button type="submit">Submit</button>
      </form>
    </ContactStyled>
  )
}

export default Contact
