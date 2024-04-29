import React from 'react'

export const Body = () => {
    return (
        <>

            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", width: "60%", height: "150px" }}>

                    <p style={{ paddingLeft: "10%", paddingTop: "10px" }}>Dailymad drug Database: Dailymad drug database Contains 14302 lebelling submitted to the sood and drug administration (FDA) by companies. Dailymad does not contain a  complete listing of FDA-regulated product (e.g. labelling that is not submitted to FDA) </p>
                </div>
                <div style={{ width: "40%", justifyContent: "center" }}>
                    <div style={{ display: "flex", paddingTop: "10px", gap: "5px" }}>
                        <button style={{ border: "1px solid black", width: "120px", height: "40px", borderRadius: "5px" }}>Anesthesia</button>
                        <button style={{ border: "1px solid black", width: "120px", height: "40px", borderRadius: "5px" }}>Cardiology</button>
                        <button style={{ border: "1px solid black", width: "120px", height: "40px", borderRadius: "5px" }}>Critical Care</button>

                    </div>
                    <div style={{ display: "flex", margin: "5px", paddingTop: "10px", gap: "5px" }}>

                        <button style={{ border: "1px solid black", width: "120px", height: "40px", borderRadius: "5px" }}>Dentistry</button>
                        <button style={{ border: "1px solid black", width: "120px", height: "40px", borderRadius: "5px" }}>Dermetology</button>
                        <button style={{ border: "1px solid black", width: "120px", height: "40px", borderRadius: "5px" }}>Diebatology</button>
                    </div>

                </div>


            </div>
            <div style={{ display: "flex", marginLeft: "5%", gap: "2%" }}>
                <div style={{ border: "2px solid black", height: "400px", width: "44%" }}>
                    <div style={{ borderBottom: "2px solid black", height: "60px" }}></div>

                </div>
                <div style={{ border: "2px solid black", height: "400px", width: "44%" }}>
                    <div style={{ borderBottom: "2px solid black", height: "60px" }}></div>

                </div>

            </div>
            <div style={{display:"flex"}}>
                <div style={{ border: "1px solid black", width: "50%", height: "400px" }}>




                </div>
                <div style={{ width: "50%",display:"flex",gap:"5%",paddingTop:"50px" }}>
                    <div style={{ width: "50%" }} >
                        <p> CRITICALL CARE  <span> 10 MARCH 2023</span></p>
                        <b>Discovering Arthrogryposis:Understanding The Causes ,Symptoms and Diagnosis</b>
                        <p>Arthrogryposis, also known as curvature of the joints, is a rare condition that affects the joints  the body.</p>
                    </div>
                    <div style={{ width: "50%" }}>
                    <p> CRITICALL CARE  <span> 10 MARCH 2023</span></p>
                    <b>The Science Behind Crest Disease:Exploring the underlying mechanisms</b>
                    <div></div>
                        <p> CRITICALL CARE  <span> 10 MARCH 2023</span></p>
                        <b>A Comprehensive Guide TO Apache Scoring:How it works and how you should use it.</b>

                    </div>

                </div>

            </div>


        </>
    )
}
