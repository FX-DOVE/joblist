import "./job.css";
import { useState } from "react";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface JobProps {
  title: string;
  price: string;
  description: string;
}

const Job: React.FC<JobProps> = ({ title, price, description }) => {
  const [toggled, setToggled] = useState<boolean>(false);

  return (
    <div className="job-container">
      <div className="job-infor">
        <div className="job-title">
          JOB TITLE
          <p className="jobs-content">{title}</p>
        </div>
        <div className="job-price">
          JOB PRICE
          <p className="jobs-content">{price}</p>
        </div>
      </div>

      {/* Toggle Button */}
      <div onClick={() => setToggled(!toggled)} style={{ cursor: "pointer" }} className="toggles">
        {toggled ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>

      {toggled && (
        <div className="toggled-job-description">
          <div className="description-content">
            JOB DESCRIPTION
            <hr />
            <p className="description-content">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;
