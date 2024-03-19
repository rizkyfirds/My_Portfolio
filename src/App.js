import './index.css';
import './App.css';

import Header from '../src/components/header/Header.js';
import Headbar from './components/headbar/Headbar.js';
import ExperienceBdoy from './components/experienceBody/ExperienceBdoy.js';
import ProjectBody from './components/project/ProjectBody.js';
import CertificateBody from './components/certificateBody/CertificateBody.js';
import FooterBody from './components/footer/FooterBody.js';

function App() {
  return (
    <div className='h-screen w-full overflow-y-auto'>
      <div className='h-1/6 sticky top-0'>
        <Headbar/>
      </div>
      <div className='h-fit px-16 mb-8'>
        <Header/>
      </div>
      <div className='h-fit bg-blue px-16 pb-8'>
        <ExperienceBdoy/>
      </div>
      <div className='h-fit bg-white px-16 pb-8'>
        <ProjectBody/>
      </div>
      <div className='bg-white px-16 pb-8'>
        <CertificateBody/>
      </div>
      <div className='h-fit bg-blue px-16 pb-8'>
        <FooterBody/>
      </div>
    </div>
  );
}

export default App;
