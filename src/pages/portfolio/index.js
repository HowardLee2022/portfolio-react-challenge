
import Projects from "../../components/portfolio"
import 'bootstrap/dist/css/bootstrap.min.css';





const portfolio = () =>{

    

const project = [
{
name:"Tech-blog",
link:"https://github.com/HowardLee2022/Tech-Blog-Challenge",
image:"https://cdn.discordapp.com/attachments/634938875873329183/1082423989953122304/techblog.png",
live:"https://hltechblog.herokuapp.com/"},

{
name:"Little-Library",
link:"https://github.com/HowardLee2022/Little-Library",
image:"https://cdn.discordapp.com/attachments/634938875873329183/1082423837829898340/littlelibrary.png",
live:"https://littlelibrary.herokuapp.com/"
},
{name:"Nova",
link:"https://github.com/BRosencrans/stars-and-planet-info",
image:"https://raw.githubusercontent.com/BRosencrans/stars-and-planet-info/dev/assets/Screenshots-demos/screenshots/stars-no-picture.png",
live:"https://brosencrans.github.io/stars-and-planet-info/"},
{name:"Makin-Moves",
link:"https://github.com/HowardLee2022/Makin-Moves-fe",
image:"https://cdn.discordapp.com/attachments/634938875873329183/1087524196239814717/makinmoves.jpg",
live:"https://howardlee2022.github.io/Makin-Moves-fe/"
}]

    return(
        <div class="container">
            <div class="row">
                {project.map( i => <Projects name={i.name} link= {i.link} image={i.image} live={i.live}/>)}
            </div>
        </div>
    )
    
}

export default portfolio;