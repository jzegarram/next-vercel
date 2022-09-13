import { MainLayout } from '../components/Layouts/MainLayout'
import { ReactNode } from 'react';

export default function About() {
  return (
    <h1 >
      About 
    </h1>
  )
}

About.getLayout = function getLayout( page: ReactNode ) {
  return(
    <MainLayout
      descriptionContent={"hola"}
      title={"About"}
      >
        { page }
      </MainLayout>
  )
}
