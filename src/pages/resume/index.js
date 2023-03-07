import myresume from "./resume.pdf"


const resume = () =>{
    return(
        <div className="background">
        <div className="container">
            <br></br>
            <h2 className="display-6 text-center">Resume</h2>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title" style={{color:'black'}}>Front End</h1>
                            <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>BOOTSTRAP</li>
                            <li>HandleBars</li>
                            <li>React</li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title" style={{color:'black'}}>Back End</h1>
                            <ul>
                            <li>Javascript</li>
                            <li>SQL</li>
                            <li>Sequelize</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                            </ul>
                        </div>
                       <h4> <a href={myresume} target='_blank' download="resume">Download Resume</a></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    )
}

export default resume;