import { ReactNode } from 'react'
import { MainLayout } from '../components/Layouts/MainLayout'

export default function Contact() {
  return (

        <h1 >
          Contact 
        </h1>
    
  )
}

Contact.getLayout = function getLayout( page: ReactNode ){
  return(
    <MainLayout
      descriptionContent={"hola"}
      title={"Contact"}
      >
        { page }
    </MainLayout>
  )
}
