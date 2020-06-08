import React from "react";

function Experience(){
    return(
<div id="experience">
    <div className="container">
      <div className="row justify-content-center">
        
        <div className="col-md-10 col-sm-12">
        
        <h3 className="text-center experience-all">Experiences</h3>

          <h3 className="mb-5 experience-title">Work</h3>
          <div className="experience-top">
            <h6>2019</h6>
            <h4>Data Science Intern – Digitas North America</h4>
            <p className="my-3">Samsung Mobile Project</p>
            <ul>
              <li>Applied SQL based on Google big cloud platform and implement Python to self-extract tables from complicated databases.</li>
              <li>Calculate the migration rate of people switching from their current phones to the latest Samsung phone model.</li>
              <li>Operated R to test statistical significance and visualize results and found associating optimal number of advertisements to serve audience for each phone group.</li>
            </ul>
            <p className="my-3">Macy’s Beauty Project</p>
            <ul>
              <li>Collaborate with other interns from different fields to form a business strategy to promote Macy's beauty sales toward Gen Z customers.</li>
              <li>Excel was utilized as the primary tool to analyze survey results. A/B testing skills were applied to measure the success of metrics we created.</li>
              <li>Our ultimate research findings yielded a proposed strategy to launch influencer-customized beauty boxes.</li>
            </ul>


          </div>
          <div className="experience-top">
            <h6>2015 - 2017</h6>
            <h4>Research Assistant – Stony Brook University</h4>
            <p className="my-3">Scientific Research Project</p>
            <ul>
              <li>Applied statistical methods like regression analysis to analyze large datasets. Operated Matlab to visualize results. </li>
              <li>Water vapor prediction is found to be crucial for cyclone center pressure prediction accuracy.</li>
              <li><a href="https://ui.adsabs.harvard.edu/abs/2017MsT.........11S/abstract">Thesis publication link</a> </li>
            </ul>
          </div>

          <br/>

          <h3 className="mb-5 experience-title">Projects</h3>
          <div className="experience-top">
            <h6>2019</h6>
            <h4>IST 718 - Big Data Analytics Class Project</h4>
            <p className="my-3">FIFA19 Players Analysis Project</p>
            <ul>
            <li>Perform machine learning algorithms in Python Spark environment following pipelines procedure.</li> 
            <li>Predict FIFA football players overall score based on his skills and performance using algorithms such as Linear Regression, Random Forest Regressor, and Gradient Boosting Regressor.</li> 
            <li>Operate k-means cluster to group players with similarity.</li>
            </ul>
          </div>
          <div className="experience-top">
            <h6>2019</h6>
            <h4>IST 707 - Data Analytics Class Project</h4>
            <p className="my-3">Airbnb Hosts Review Score Prediction Project</p>
            <ul>
            <li>Specific machine learning models include Linear Regression, Random Forest Regressor, and Gradient Boosting Regressor.</li> 
            <li>Grid search and cross validation techniques were applied to tune and analyze models.</li> 
            <li>Operate k-means cluster to group players with similarity.</li>
            </ul>
          </div>
          <div className="experience-top">
            <h6>2020</h6>
            <h4>IST 736 - Text Mining Class Project</h4>
            <p className="my-3">Trump's Tweets Analysis Project</p>
            <ul>
            <li>Utilized Tweepy to scrape Trump's recent tweets.</li> 
            <li>Pre-processing procedures include remove stop words but keep negation words, filter out non-alphabetical characters, lower the case and remove empty tweets.</li> 
            <li>In this project, nltk packages, regular expression and feature engineering like count vectorizer, boolean vectorizer and TF-IDF are implemented.</li>
            <li>Support Vector Machine is applied for sentiment analysis and LDA(Latent Dirichlet Allocation) is operated for topic modeling.</li>
            </ul>
          </div>
          <br/>



          <h3 className="mb-5 experience-title">Education</h3>
          <div className="experience-top">
            <h6>2020</h6>
            <h4>Syracuse University</h4>
            <p className="my-3">Master of Science | Major: Applied Data Science | GPA: 3.97</p>
          </div>
          <div className="experience-top">
            <h6>2017</h6>
            <h4>Stony Brook University</h4>
            <p className="my-3">Master of Science | Major: Atmospheric Sciences | GPA: 3.5</p>
          </div>
          <div className="experience-top">
            <h6>2014</h6>
            <h4>Nanjing University of Information Science and Technology</h4>
            <p className="my-3">Bachelor of Science | Major: Atmospheric Sciences | GPA: 3.63</p>
          </div>

        </div>
      </div>
    </div>
  </div>

    );
}

export default Experience;

