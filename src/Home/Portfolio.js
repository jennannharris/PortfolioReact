import { Link } from "react-router-dom";
import data from "../Data";

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h1>Portfolio</h1>
      <p>To view more details about the projects, click on any of the cards.</p>
      <div className="row">
        {data.map((projectData, index) => {
          return <Project {...projectData} index={index} key={index} />;
        })}
      </div>
    </section>
  );
};

const Project = ({ img, title, text, button, index }) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card">
        <img src={img} className="card-img-top" alt={`${title} screenshot`} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <Link to={`/project/${index}`} className="btn btn-primary">
            {button}
          </Link>
        </div>
      </div>
    </div>
    

    
    
  );
};
export default Portfolio;
