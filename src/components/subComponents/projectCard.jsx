import './css/projectCard.css'

const ProjectCard = ({topic, description, link='', linkName})=>{
    return(
        <div className='projectCard'>
                <h4>{topic}</h4>
          
                <p>{description}</p>
                    <hr></hr>
                    <button onClick={()=>{window.open({link}, 'blank')}}>View on {linkName}</button>
           
        </div>
    )

}

export default ProjectCard;