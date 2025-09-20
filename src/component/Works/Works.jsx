import { NavLink } from 'react-router-dom'
import mywork_data from '../../assets/mywork_data'
import "./Works.css"

const Works = () => {
  return (
    <div className='mywork'>
      <div className="mywork-title">
        <h1>My Latest work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index) =>{
          return <NavLink target='_blank' to={work.work_link}><img key={index} src={work.work_image} alt="" className='work-img' /></NavLink>
        })}
      </div>
    </div>
  )
}

export default Works
