// import React from 'react'
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { IoLogoYoutube } from "react-icons/io5";
// import { FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <>
//             <div style={{ border: "none", marginLeft: "100px", marginRight: "100px", height: "400px", backgroundColor: "rgb(32, 30, 79)", display: "flex" }}>
//                 <div style={{ border: "1px solid white", width: "27%", height: "360px", color: "white" }}>
//                     <img style={{ width: "300px", height: "80px" }} src="" alt="" />
//                     <p>Fastest growing medical plateform for doctors</p>
//                   <div style={{}}> <span style={{width:"40px",height:"40px"}}> <FaFacebookF /></span>
//                    <span style={{width:"40px",height:"40px"}}> < FaInstagram /></span>
//                    <span style={{width:"40px",height:"40px"}}> <IoLogoYoutube /></span>
//                    <span style={{width:"40px",height:"40px"}}> <FaLinkedinIn /></span>
//                    </div>

//                 </div>
//                 <div style={{ border: "1px solid white", width: "27%", height: "360px", color: "white" }}>
//                     <p style={{ textAlign: "left" }} >REACH US</p>
//                 </div>

//                 <div style={{ border: "1px solid white", width: "46%", height: "360px", color: "white", textAlign: 'left' }}>
//                     <p style={{ marginLeft: "30px" }}>HIDOC. DR. FEATURES </p>
//                     <div style={{}}>
//                         <div style={{ border: "1px solid white", height: "140px", width: "full", display: "flex" }}>
//                             <div style={{ border: "1px solid yellow", height: "140px", width: "25%", textAlign: "center" }} >

//                                 <div></div>
//                                 <p >Drug Database</p>
//                             </div>
//                             <div style={{ border: "1px solid yellow", height: "140px", width: "25%", textAlign: "center" }} >
//                                 <div></div>
//                                 <p>Webinars</p>

//                             </div>
//                             <div style={{ border: "1px solid yellow", height: "140px", width: "25%", textAlign: "center" }} >
//                                 <div></div>
//                                 <p>Drug Integration </p>
//                             </div>
//                             <div style={{ border: "1px solid yellow", height: "140px", width: "25%", textAlign: "center" }} >
//                                 <div></div>
//                                 <p>Medical Calculator</p>
//                             </div>
//                         </div>
//                         <div style={{ border: "1px solid white", height: "140px", width: "full", display: "flex" }}>

//                             <div style={{ border: "1px solid yellow", height: "140px", width: "25%", textAlign: "center" }} >
//                                 <div></div>
//                                 <p>Articles</p>
//                             </div>
//                             <div style={{ border: "1px solid yellow", height: "140px", width: "25%", textAlign: "center" }} >
//                                 <div></div>
//                                 <p>Quizes</p>

//                             </div>
//                             <div style={{ border: "1px solid yellow", height: "140px", width: "25%", textAlign: "center" }} >
//                                 <div></div>
//                                 <p>Diseases Database</p>
//                             </div>
//                             <div style={{ border: "1px solid yellow", height: "140px", width: "25%", textAlign: "center" }} >
//                                 <div></div>
//                                 <p>Surveys</p>
//                             </div>

//                         </div>


//                     </div>
//                 </div>

//             </div>
//             <div style={{ border: "none", marginLeft: "100px", marginRight: "100px", height: "60px", backgroundColor: "rgb(232, 248, 250)",textAlign:"center" }}>
//                 <p style={{ paddingTop: "1px", marginTop: "-5px" }}> © Copyright 2022 <b>Hidoc. Dr. Inc.</b> </p>
//                 <p style={{ marginTop: "-10px" }}>Terms & Conditions | Privacy Policy</p>

//             </div>



//         </>
//     )
// }

// export default Footer


import React from "react";
import { FaFacebook, FaRegClipboard } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { MdVideoCameraFront } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { SlCalculator } from "react-icons/sl";
import { TfiCup } from "react-icons/tfi";
const Footer = () => {

   
  return (
    <>
      <div className="bg-blue-950 h-96 p-6">
        <div className="flex justify-around">
          <div>
            <img
              className="h-10 mt-4"
              src="https://www.hidoc.co/ad_campaign/pharma/sai_allergy/img/logo.png"
              alt=""
            />
            <div className="mt-5">
            <p className="text-white">Faster Growing Medical Platform for</p>
            <p className="text-white">Doctors.</p>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="text-white">
                <FaFacebook size={30}/>
              </div>
              <div className="text-white">
                <FaInstagram size={30}/>
              </div>
              <div className="text-white">
                <IoLogoYoutube size={30}/>
              </div>
              <div className="text-white">
                <FaLinkedin size={30}/>
              </div>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold">REACH US</div>
            <div className="mt-2">
              <p className="text-white">
                Please contact the below details for any other
              </p>
              <p className="text-white">information</p>
              <div className="mt-5">
              <p className="text-blue-400">Email:</p>
              <p className="text-white">info@hidoc.co</p>
              </div>
              <div className="mt-5">
              <p className="text-blue-400">Address:</p>
              <p className="text-white">
                Hidoc Dr. Inc, 2055 Limestone Rd, STE 200-C,
              </p>
              <p className="text-white">
                Wilmington, DE, 19808, United States.
              </p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold">HIDOC DR. FEATURES</div>
            <div className="h-72  w-[710px] mt-2 flex flex-wrap ">
              <div className="bg-blue-100 h-36 w-44 border border-gray-300">
                <div className="bg-sky-500 rounded-full h-12 w-12 m-auto mt-10">
                  <div className="text-white  h-10 w-10 p-2"><FaRegFolder size={30} /></div>
                </div>
                <div className="text-center text-sky-500">Drug Database</div>
              </div>
              <div className="bg-red-100 h-36 w-44 border border-gray-300">
                <div className="bg-red-500 rounded-full h-12 w-12 m-auto mt-10">
                  <div className="text-white h-10 w-10 p-2"><MdVideoCameraFront size={30}/></div>
                </div>
                <div className="text-center text-red-500">Webinars</div>
              </div>
              <div className="bg-blue-100 h-36 w-44 border border-gray-300">
                <div className="bg-blue-500 rounded-full h-12 w-12 m-auto mt-10">
                  <div className="text-white h-10 w-10 p-2"><FaFileAlt size={30}/></div>
                </div>
                <div className="text-center text-blue-500">Drug Interaction</div>
              </div>
              <div className="bg-green-100 h-36 w-44 border border-gray-300">
                <div className="bg-green-500 rounded-full h-12 w-12 m-auto mt-10">
                  <div className="text-white h-10 w-10 p-2"><SlCalculator size={30}/></div>
                </div>
                <div className="text-center text-green-500">Medical Calculator</div>
              </div>
              <div className="bg-orange-200 h-36 w-44 border border-gray-300">
                <div className="bg-orange-500 rounded-full h-12 w-12 m-auto mt-10">
                <div className="text-white h-10 w-10 p-2"><FaFileAlt size={30}/></div>
                </div>
                <div className="text-center text-orange-500">Articles</div>
              </div>
              <div className="bg-blue-100 h-36 w-44 border border-gray-300">
                <div className="bg-blue-500 rounded-full h-12 w-12 m-auto mt-10">
                  <div className="text-white h-10 w-10 p-2"><TfiCup size={30}/></div>
                </div>
                <div className="text-center text-blue-500">Quizzes</div>
              </div>
              <div className="bg-sky-100 h-36 w-44 border border-gray-300">
                <div className="bg-sky-500 rounded-full h-12 w-12 m-auto mt-10">
                <div className="text-white h-10 w-10 p-2"><FaFileAlt size={30}/></div>
                </div>
                <div className="text-center text-sky-500">Dieseases Database</div>
              </div>
              <div className="bg-red-100 h-36 w-44 border border-gray-300">
                <div className="bg-red-500 rounded-full h-12 w-12 m-auto mt-10">
                  <div className="text-white h-10 w-10 p-2"><FaRegClipboard size={30}/></div>
                </div>
                <div className="text-center text-red-500">Surveys</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 text-center py-2">
        <div> © Copyright 2022<span className="font-bold ml-1">Hidoc Dr. Inc.</span></div>
        <div>Terms & Conditions | Privacy Polic</div>
      </div>
    </>
  );
};

export default Footer;