import React from "react";
import {
  Container
} from "react-bootstrap";
import Background from "../assets/img/tapPhoto.png"

function Dashboard() {
  return (
    <>
      <Container fluid style={{  
            backgroundImage: "url("+Background+")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity:"0.7"
           }}>
        <h2 style={{color:"white"}}>Introduction to TAP</h2>
        <br></br>
        <br></br>
        <p style={{fontSize:"22px",color:"white"}}>The Training & Placement Cell, NIT Jamshedpur facilitates the process of placement 
        of students passing out from the Institute besides collaborating with leading organizations and institutes in setting 
        up of internship and training program of students. The office liaises with various industrial establishments, corporate
        houses etc which conduct campus interviews and select graduate and post-graduate students from all disciplines. 
        The Training & Placement Cell provides the infra-structural facilities to conduct group discussions, tests and interviews
        besides catering to other logistics. The Office interacts with many industries in the country, of which nearly 100+ companies 
        visit the campus for holding campus interviews.The industries which approach the institute come under the purview of:
        </p>
         <br></br>
         <ul style={{fontSize:"22px",color:"white"}}>
           <li>Core Engineering industries</li>
           <li>IT & IT enabled services</li>
           <li>Manufacturing Industries</li>
           <li>Consultancy Firms</li>
           <li>Finance Companies</li>
           <li>Management Organisations</li>
           <li>R & D laboratories</li>
         </ul>
      </Container>
    </>
  );
}

export default Dashboard;
