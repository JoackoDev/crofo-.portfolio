import type { NextPage } from 'next'
import styled from '@emotion/styled'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from 'emailjs-com'

const consultSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required(),
  description: yup.string(),
  subject: yup.string().required()
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
      margin-top: 80px;
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

    .success {
      display: none;
    }

    @media (max-width: 986px) {
      .formContact {
        width: 90%; 
      }
    }
  `  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(consultSchema)
  })

  /*const spanDisplay = () => {
    const form: any = document.querySelector('.formContact')
    const span: HTMLElement|null = document.querySelector('.success')

    if (form) form.reset()
    if (span) span.style.display = 'block'

    setTimeout(() => {
      if (span) span.style.display = 'none'
    }, 5000)
  }*/

  const sendMail: any = async () => {
    try {
      const form: any = document.querySelector('.formContact')
      if (form) {                               //Service ID        // Template ID
        const sendMail = await emailjs.sendForm('service_w9z84q2', 'template_hyg1u9p', form, 'user_ptxx8lAAdUhoe7ZCiATmB')
        if (!sendMail) {
          console.log('error to send mail')
        }
        alert('Consulta enviada con éxito')
        reset()

      } else {
        console.log('Error to find form')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ContactStyled id="form">
      <form className="formContact" onSubmit={handleSubmit(sendMail)}>
        <h1>Contáctame</h1>
        
        <label htmlFor="name">Nombre Completo</label>
        <input {...register('name')} type="text" placeholder="Nombre completo" maxLength={40} />
        {errors.name?.type === 'required' && 
        <span className='msgError'>El nombre es requerido</span>}
        
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="email" placeholder="Email" maxLength={50} />
        {errors.email?.type === 'required' && 
        <span className='msgError'>El email es requerido</span>}
        
        <label htmlFor="phone">Teléfono</label>
        <input {...register('phone')} type="number" maxLength={30} placeholder="Phone" />
        {errors.phone?.type === 'required' && 
        <span className='msgError'>El teléfono es requerido</span>}
        
        <label htmlFor="subject">Asunto</label>
        <input {...register('subject')} type="text" placeholder="Asunto" maxLength={40} />
        {errors.subject?.type === 'required' && 
        <span className='msgError'>El asunto es requerido</span>}
        
        <label htmlFor="description">Descripción</label>
        <textarea {...register('description')} placeholder="Descripción" maxLength={600}></textarea>

        <span className="success">Consulta enviada con éxito</span>
        <button type="submit">Submit</button>
      </form>
    </ContactStyled>
  )
}

export default Contact
