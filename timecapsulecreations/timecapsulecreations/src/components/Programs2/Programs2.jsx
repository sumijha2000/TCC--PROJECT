
import React from 'react'
import { Link } from 'react-router-dom';
import './Programs2.css'
import programimg from '../../assets/Rectangle 22.svg'
import programimg2 from '../../assets/Frame 8.svg'
import programimg3 from '../../assets/Frame 9.svg'
import programimg4 from '../../assets/Frame 10.svg'


const Programs2 = () => {
  const backToTop = ()=>{
    window.scrollTo({top:0,left:0,behavior:'smooth'});
  }
  return (
    <div className='promgms-container'>
        <div className="program">
            <div className="sidebar">
            <h2>Sidebar</h2>
        <ul>
          <Link to='/eco'><li onClick={backToTop}>Business & Economy</li></Link>
          <Link to='/food'><li onClick={backToTop}>Food & Cuisine</li></Link>
          <Link to='/science'><li onClick={backToTop}>Science</li></Link>
          <Link to='/comm'><li onClick={backToTop}>Communication</li></Link>    
          <Link to='/health'><li onClick={backToTop}>HealthWellness</li></Link>
          <Link to='/sports'><li onClick={backToTop}>Sports</li></Link>
          <Link to='/politics'><li onClick={backToTop}>Politics</li></Link>
          <Link to='/env'><li onClick={backToTop}>Environment</li></Link>
          <Link to='/culture'><li onClick={backToTop}>CultureEntertainment</li></Link>
        </ul>
        </div>
            </div>
       
         <div className="program">
            <img  src={programimg} alt="technology" />
            <Link to="/technology">
          <button onClick={backToTop} className='btn-1'>View More</button>
        </Link>
        
            <p className='sub-title'><b>Technology:</b>
             Welcome to our digital time capsule! Explore the highlights of technological innovation from 2024.</p>
        </div>

        <div className="program">
            <img src={programimg2} alt="img2" />
            <Link to="/fashion">
          <button  onClick={backToTop} className='btn-1'>View More</button>
        </Link>
            <p className='sub-title'><b>Fashion & Trends:</b>
             Fashion and trends are fascinating reflections of culture, creativity, and self-expression. </p>
        </div>

        <div className="program">
            <img src={programimg3} alt="img3" />
            <Link to="/transportation">
          <button  onClick={backToTop} className='btn-1'>View More</button>
        </Link>
            <p className='sub-title'><b>Transportation:</b>
             Transportation is an essential part of modern life, shaping how we move, interact, and experience the world around us.</p>
        </div>

        <div className="program">
            <img src={programimg4} alt="img4" />
            <Link to="/Medicine">
          <button  onClick={backToTop} className='btn-1'>View More</button>
        </Link>
            <p className='sub-title'><b>Medicine:</b>
             Medicine is a dynamic field dedicated to improving human health and well-being through research, innovation, and patient care.
            </p>
        </div> 
        
    </div>
  )
}

export default Programs2