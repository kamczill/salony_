import React from 'react'
import { Formik} from 'formik'
import * as yup from 'yup';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Container, Form, Input, FieldContainer, Textarea, Button, ButtonContainer, Content} from './styles/TextEditor.styled'

const newsSchema = yup.object().shape({
  title: yup.string().required('Tytuł jest wymagany!'),
  href: yup.string().required('Href jest wymagany!'),
  img: yup.string().required('Zdjęcie jest wymagane!'),
  tags: yup.string().required('Tagi są wymagane!'),
  content: yup.string().required('Treść newsa jest wymagana!'),
  author: yup.string().required('Autor jest wymagany!'),
})


const TextEditor = () => {

  const sendNews = async (values, actions) => {
    
    const tags = values.tags.split(',').map(element => element.trim())

    await axios.post('http://127.0.0.1:8001/news', {
      "title": values.title,
      "img": values.img,
      "href": values.href,
      "tags": tags,
      "content": values.content,
      "author": values.author
    }, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(res => {
        toast.success('Twój news został dodany!');
        actions.resetForm();
      })
      .catch(err => {
        toast.warning(err.message);
      })
  }

  return(
    <Container>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1>Dodaj newsa</h1>
     <Formik
       initialValues={{ title: '', href: '', img: '', tags:'', content: '', author: ''}}
       validationSchema={newsSchema}
       onSubmit={(values, actions) => {
         sendNews(values, actions);
        
       }}
     >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         setFieldValue,
         resetForm
       }) => (
         <Form onSubmit={handleSubmit}>
          <FieldContainer>
           <label htmlFor='author'><h3>Autor</h3></label>
           <Input
             type="text"
             name="author"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.author}
           />
           <p>{errors.author && touched.author && errors.author}</p>
           </FieldContainer>
           <FieldContainer>
          <label htmlFor='title'><h3>Tytuł</h3></label>
          <Button type='button' onClick={() => setFieldValue('title', values.title + '<b></b>')}>Pogrubienie</Button>
           <Textarea
             type="text"
             name="title"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
           />
           <p>{errors.title && touched.title && errors.title}</p>
           </FieldContainer>
           <FieldContainer>
          <label htmlFor='href'><h3>Href</h3></label>
           <Textarea
             type="text"
             name="href"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.href}
           />
           <p>{errors.href && touched.href && errors.href}</p>
           </FieldContainer>
           <FieldContainer>
           <label htmlFor='img'><h3>Link do zdjęcia</h3></label>
           <Input
             type="text"
             name="img"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.img}
           />
           <p>{errors.img && touched.img && errors.img}</p>
           </FieldContainer>
           <FieldContainer>
           <label htmlFor='tags'><h3>Tagi</h3></label>
           <span>(np. 'Fame MMA, Wardęga, Boxdel')</span>
           <Input
             type="text"
             name="tags"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.tags}
           />
           <p>{errors.tags && touched.tags && errors.tags}</p>
           </FieldContainer>
           <FieldContainer>
           <label htmlFor='content'><h3>Treść Newsa</h3></label>
           <ButtonContainer>
            <Button type='button' onClick={() => setFieldValue('content', values.content + '<article>')}>Artykuł start</Button>
            <Button type='button' onClick={() => setFieldValue('content', values.content + '</article>')}>Artykuł koniec</Button>
            <Button type='button' onClick={() => setFieldValue('content', values.content + '<p>')}>Paragraf start</Button>
            <Button type='button' onClick={() => setFieldValue('content', values.content + '</p>')}>Paragraf koniec</Button>
            <Button type='button' onClick={() => setFieldValue('content', values.content + '<img src="" alt="" />')}>Zdjęcie</Button>
            <Button type='button' onClick={() => setFieldValue('content', values.content + '<strong>')}>Pogrubienie start</Button>
            <Button type='button' onClick={() => setFieldValue('content', values.content + '</strong>')}>Pogrubienie koniec</Button>
           </ButtonContainer>
           <Content
             type="text"
             name="content"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.content}
           />
           <p>{errors.content && touched.content && errors.content}</p>
           </FieldContainer>
           <Button type="submit" disabled={isSubmitting}>
             Wyślij
           </Button>
         </Form>
       )}
     </Formik>
    </Container>
  )
}

export default TextEditor