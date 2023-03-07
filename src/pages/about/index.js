import 'bootstrap/dist/css/bootstrap.min.css';


const about = () =>{
    return( 
<div className="background">
            <div className="container">
                <br></br>
                <h2 className="display-6 text-center">About Me</h2>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title" style={{color:'black'}}>Howard Lee</h1>
                                <p class="card-text" style={{color:'black'}}>I'm currently a student at the EDXbootcamp. This website will display all the projects and application i have built during my time at this bootcamp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default about;