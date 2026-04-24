import {Header} from "../../components/Header.tsx";
import './NotFoundPage.css'


export function NotFoundPage() {
  return(
    <>
      <Header/>
      <div className="not-found">
        <h1> 404 </h1>
        <h2>NOT FOUND</h2>
      </div>
    </>
  );
}