import React from 'react';
import {Link, link} from 'react-router-dom';

//SASS
import '../sass/main.scss'

// components
import HeroLayout from '../components/ashelyssite/HeroLayout';
import NavTwo from '../components/general/navigation-two';
import ContainerOne from '../components/ashelyssite/ContainerOne';
import ContainerTwo from '../components/ashelyssite/ContainerTwo';
import Footer from '../components/general/Footer'

const AshleysSitePage = () =>{
return (
    <div>
<HeroLayout />
<NavTwo />
<ContainerOne />
<ContainerTwo />
<Footer />
 </div>  


);
};
export default AshleysSitePage;