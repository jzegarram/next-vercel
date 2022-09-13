import { MainLayout } from '../components/Layouts/MainLayout'
import { ReactNode } from 'react';

export default function Home() {
  return (
        <h1 >
          Home 
        </h1>
  )
}

Home.getLayout = function getLayout( page: ReactNode ) {
  return(
    <MainLayout
    descriptionContent={"hola"}
    title={"Home"}
    >
      { page }
    </MainLayout>
  )
}
