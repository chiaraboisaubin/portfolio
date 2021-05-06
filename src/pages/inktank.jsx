import React from 'react';
import {Link} from 'react-router-dom';

//SASS
import '../sass/main.scss'

// components
import HeroLayout from '../components/inktank/HeroLayout';
import NavTwo from '../components/general/navigation-two';
import ContainerOne from '../components/inktank/ContainerOne';
import ContainerTwo from '../components/inktank/ContainerTwo';
import Footer from '../components/general/Footer'

const InkTankPage = () =>{
    
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
export default InkTankPage;