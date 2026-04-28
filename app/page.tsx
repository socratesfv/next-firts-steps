import Link from "next/link";
import style from '../components/active-link/ActiveLink.module.css'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Home Page!!!</span>
      
      Ingresar a  
      <Link 
      className={ `${style.link}`}
      href={'/about'}>
        About Page</Link>
    </main>
  );
}
