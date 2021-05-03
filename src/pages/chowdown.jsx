import React from 'react';
import {Link, link} from 'react-router-dom';

//SASS
import '../sass/main.scss'

// components
import HeroLayout from '../components/Chowdown/HeroLayout';
import NavTwo from '../components/general/navigation-two';
import ContainerOne from '../components/Chowdown/ContainerOne';
import Footer from '../components/general/Footer'

const ChowdownPage = () =>{
    
return (
    <div>
<HeroLayout />
<NavTwo />
<ContainerOne />
<Footer />
 </div>  


);
};
export default ChowdownPage;