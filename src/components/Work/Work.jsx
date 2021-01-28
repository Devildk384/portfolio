import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import ShareStoria from "../../images/portfolio/sharestoria.png"
import CovidTracker from "../../images/portfolio/covid-tracker.png"
import PhotoSave from "../../images/portfolio/photosave.png"
import FinalPractice from "../../images/portfolio/finalpractice.png"
import MovieInfo from "../../images/portfolio/movieinfo.jpg"
import ShopToBuy from "../../images/portfolio/shoptobuy.png"
import movieInfoApp from "../../images/portfolio/MovieInfo-App.png"
import linkedin from "../../images/portfolio/linkedIn.png"
import snapchat from "../../images/portfolio/snapchat.png"




import "./work.scss"




const Work = () => {
  
  return (
    <section className="work" id="work">
      <h1 className="work__title">Some Things I've Built</h1>

      <div className="work__wrapper">
        
        <div className="project sharestoria-project">
          <figure className="project__img-wrapper">
            <a
              href="https://ShareStoria.me/"
              rel="noopener noreferrer"
              target="_blank"
            >

            <img className="project__img" alt="ShareStoria hero" src={ShareStoria} /> 
             
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>ShareStoria</h4>

            <div className="project__about">
              <p>
                ShareStoria is a platform where anyone can share their story.  
                   A fullstack site with Node, React ,Express, and MongoDB.
              </p>
            </div>

            <ul>
              <li>React</li>
              <li>Sass</li>
              <li>Next.js</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>

            <div className="project__links">
             
              <a
                href="https://ShareStoria.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div>


       


        <div className="project shoptobuy-project">


        <div className="project__info">
            <h5>Featured Project</h5>
            <h4>ShopToBuy</h4>

            <div className="project__about">
              <p>
              ShoptoBuy is a fullstack ecommerce site with Node, React,Express, and MongoDB.
               Admin Dashboard to manage Products,Buy product and Payment system with Braintree.
              </p>
            </div>

            <ul>
            <ul>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Bootstrap</li>
              <li>Braintree</li>
            </ul>
            </ul>

            <div className="project__links">
             
              <a
                
                href="http://35.202.180.243/"

                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>

          <figure className="project__img-wrapper">
            <a
              href="http://35.202.180.243/"
              rel="noopener noreferrer"
              target="_blank"
            >
            <img className="project__img" alt="ShoptoBuy hero" src={ShopToBuy} /> 
              
            </a>
          </figure>

          
        </div>



        <div className="project movieinfo-project">
          <figure className="project__img-wrapper">
            <a
              href="https://movieinfo-d1449.web.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
            <img className="project__img" alt="MovieInfo hero" src={MovieInfo} /> 
              
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>MovieInfo</h4>

            <div className="project__about">
              <p>
              A web app for visualizing movie info. Browse your favorite Movies, 
               actors, recently added movies, and detailed information about each movie.
              </p>
            </div>

            <ul>
              <li>React</li>
              <li>TMDB API</li>
              <li>CSS Grid </li>
              <li>Flexbox</li>
              <li>Sass</li>
            </ul>

            <div className="project__links">
              <a
                href="https://github.com/Devildk384/MovieInfo"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="project__icon" title="Github" />
              </a>
              <a
                
                href="https://movieinfo-d1449.web.app/"

                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div>


        

        <div className="project shoptobuy-project">

        <div className="project__info">
            <h5>Featured Project</h5>
            <h4>LinkedIn Clone</h4>

            <div className="project__about">
              <p>
              A linkedIn clone  using React, Redux , firebase for using authentication, database, hosting. Using material-ui for icons
              </p>
            </div>

            <ul>
             <li>React</li>
              <li>Redux</li>
              <li>firebase</li>
              <li>Css</li>
            </ul>

            <div className="project__links">
              <a
                href="https://github.com/Devildk384/linkedIn-clone"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="project__icon" title="Github" />
              </a>
              <a
                href="https://linkedin-clone-eea1b.web.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>

          <figure className="project__img-wrapper">
            <a
              href="https://linkedin-clone-eea1b.web.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
             <img className="project__img" alt="linkdin-clone hero" src={linkedin} />
             
            </a>
          </figure>

         
        </div>

        

       
        <div className="project covid-project">
          <figure className="project__img-wrapper">
            <a
              href="https://zen-brahmagupta-a1d22b.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
             <img className="project__img" alt="Covid-Tracker hero" src={CovidTracker} />
             
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>Covid-Tracker</h4>

            <div className="project__about">
              <p>
                A web app for covid cases info. Browse by countries and details about
                recovered cases, daily cases.
              </p>
            </div>

            <ul>
              <li>React</li>
              <li>API</li>
              <li>Css</li>
            </ul>

            <div className="project__links">
              <a
                href="https://github.com/Devildk384/Covid-Tracker"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="project__icon" title="Github" />
              </a>
              <a
                href="https://zen-brahmagupta-a1d22b.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div>


 <div className="project shoptobuy-project">

 <div className="project__info">
    <h5>Featured Project</h5>
    <h4>Snapchat Clone</h4>

    <div className="project__about">
      <p>
      A Snapchat clone  using React, Redux , firebase for using authentication, database, hosting. Using material-ui for icons
      </p>
    </div>

    <ul>
     <li>React</li>
      <li>Redux</li>
      <li>firebase</li>
      <li>Css</li>
    </ul>

    <div className="project__links">
      <a
        href="https://github.com/Devildk384/snapchat-clone"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub className="project__icon" title="Github" />
      </a>
      <a
        href="https://snapchat-clone-41e7c.web.app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaExternalLinkAlt
          className="project__icon"
          title="View Project"
        />
      </a>
    </div>
  </div>

  <figure className="project__img-wrapper">
    <a
      href="https://snapchat-clone-41e7c.web.app"
      rel="noopener noreferrer"
      target="_blank"
    >
     <img className="project__img" alt="snapchat-clone hero" src={snapchat} />
     
    </a>
  </figure>

 
</div>



        <div className="project movieInfoApp-project">
          <figure className="project__img-wrapper">
            <a
              href="https://play.google.com/store/apps/details?id=com.AD.movieinfo"
              rel="noopener noreferrer"
              target="_blank"
            >

          <img className="project__img" alt="PhotoSave hero" src={movieInfoApp} />  
             
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>MovieInfo</h4>

            <div className="project__about">
              <p>
              A MovieInfo app built in flutter. Fetching data from TMDB API. Details information about your favorite Movies, 
               actors, recently added movies, and detailed information about each movie. Also check out their trailers.
              </p>
            </div>

            <ul>
              <li>Flutter</li>
              <li>Dart</li>
              <li>TMDB API</li>
           
              
            </ul>

            <div className="project__links">
              <a
                href="https://play.google.com/store/apps/details?id=com.AD.movieinfo"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div>  

       

        <div className="project finalpractice-project">
          <figure className="project__img-wrapper">
            <a
             href="https://play.google.com/store/apps/details?id=co.durgeshkumar.finalpractice"
              rel="noopener noreferrer"
              target="_blank"
            >

          <img className="project__img" alt="FinalPractice hero" src={FinalPractice} />
              
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>FinalPractice</h4>

            <div className="project__about">
              <p>
              A FinalPractice is a quiz app built in flutter. To help my friends during covid to prepare for final semester exam with the new exam pattern.
              </p>
            </div>

            <ul>
              <li>Flutter</li>
              <li>Dart</li>
           
              
            </ul>

            <div className="project__links">
              <a
                href="https://play.google.com/store/apps/details?id=co.durgeshkumar.finalpractice"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div> 

         <div className="project photosave-project">
          <figure className="project__img-wrapper">
            <a
              href="https://play.google.com/store/apps/details?id=com.AD.photosave"
              rel="noopener noreferrer"
              target="_blank"
            >

          <img className="project__img" alt="PhotoSave hero" src={PhotoSave} />  
             
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>PhotoSave</h4>

            <div className="project__about">
              <p>
              A PhotoSave app built in flutter. Fetching photo from API. Easy to Download photos on onclick
              </p>
            </div>

            <ul>
              <li>Flutter</li>
              <li>Dart</li>
           
              
            </ul>

            <div className="project__links">
              <a
                href="https://play.google.com/store/apps/details?id=com.AD.photosave"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div>       

      </div>
    </section>
  )
}

export default Work
