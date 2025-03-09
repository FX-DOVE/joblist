import Job from './job/Job';
import Joblist from './job/joblist';
import "./app.css";


import React from "react";

const App: React.FC = () => {
  console.log(Joblist);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logo">JOB LIST</h1>
      </header>
      <div className="main-content">
        {Joblist.length > 0 ? (
          Joblist.map((job, index) => (
            <Job 
              key={index} 
              title={job.title} 
              price={job.average_salary} 
              description={job.description} 
            />
          ))
        ) : (
          <p className='noJob'>No job available now</p>
        )}
      </div>
      <footer className="App-header">
        <h5 className="fotter-content">job list</h5>
      </footer>
    </div>
  );
};

export default App;
