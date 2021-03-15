import React from 'react';
import {Link, link} from 'react-router-dom';

//SASS
import '../sass/main.scss'

// components
import HeroLayout from '../components/animelist/HeroLayout';
import NavTwo from '../components/general/navigation-two';
import ContainerOne from '../components/animelist/ContainerOne';
import ContainerTwo from '../components/animelist/ContainerTwo';
import Footer from '../components/general/Footer'

const AnimeListPage = () =>{
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
export default AnimeListPage;