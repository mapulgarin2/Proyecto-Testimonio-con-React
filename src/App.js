
import './App.css';
import Testimonio from './component/testimonio';
const Testimonios = [
  {nombre:'Shawn Wang',
  pais:'Singapore',
  imagen:'Shawn',
  cargo:'Software Engineer',
  empresa:'Amazon',
  testimonio:'It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'},
  {nombre:'Sarah Chima',
  pais:'Nigeria',
  imagen:'Sarah',
  cargo:'Software Engineer',
  empresa:'ChatDesk',
  testimonio:'freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'},
  {nombre:'Emma Bostian',
  pais:'Sweden',
  imagen:'Emma',
  cargo:'Software Engineer',
  empresa:'Spotify',
  testimonio:'I have always struggled with learning JavaScript. I have taken many courses but freeCodeCamp is course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'}
]

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1 >Here is what our alumni say about freeCodeCamp:</h1>
      {Testimonios.map((testimonio, index) => (
        <Testimonio
          key={index}
          nombre={testimonio.nombre}
          pais={testimonio.pais}
          imagen={testimonio.imagen}
          cargo={testimonio.cargo}
          empresa={testimonio.empresa}
          testimonio={testimonio.testimonio}
        />
      ))}
      </div>
    </div>
  );
}

// Sin Objetos
// -----------------------------------------------------------------------
      // <Testimonio
      // nombre='Shawn Wang'
      // pais='Singapore'
      // imagen='Shawn'
      // cargo='Software Engineer'
      // empresa='Amazon'
      // testimonio='It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.' />
      // <Testimonio
      // nombre='Sarah Chima'
      // pais='Nigeria'
      // imagen='Sarah'
      // cargo='Software Engineer'
      // empresa='ChatDesk'
      // testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.' />
      // <Testimonio
      // nombre='Emma Bostian'
      // pais='Sweden'
      // imagen='Emma'
      // cargo='Software Engineer'
      // empresa='Spotify'
      // testimonio='I have always struggled with learning JavaScript. I have taken many courses but freeCodeCamp is course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.' />


export default App;
