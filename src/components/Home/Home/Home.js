import React from 'react';
import Banner from '../Banner/Banner';
import Client from '../Clients/Client';
import Footer from '../Footer/Footer';
import Help from '../Help/Help';
import Instructor from '../Instructor/Instructor';
import NavArea from '../NavArea/NavArea';
import Recent from '../Recent/Recent';
import TeacherInfo from '../TeacherInfo/TeacherInfo';

const Home = () => {
    return (
        <div>
            <NavArea></NavArea>
            <Banner></Banner>
            <TeacherInfo></TeacherInfo>
            <Client></Client>
            <Help></Help>
            <Instructor></Instructor>
            <Recent></Recent>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;