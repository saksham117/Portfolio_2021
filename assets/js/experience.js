AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/expedia.jpg",
    place: "Expedia",
    time: "(May, 2021 - July 2021)",
    desp: "<li>Worked in the Cloud Computing team, where our work revolved around the AWS Ecosystem.</li> <li>Implemented a Virtual Private Cloud(VPC) Health Check System for the servers deployed on the AWS Cloud, whose primary role was to troubleshoot VPC architecture and detect the problem quickly and efficiently to reduce response and issue detection time.</li> <li>Automated the complete process using Python and Boto3 library improving the speed of the whole process by 50 percent.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/drdo.png",
    place: "DGRE, DRDO",
    time: "(Jan, 21 - April, 21)",
    desp:"<li>Worked on the project titled Multi-model Avalanche Forecasting in Western Himalayas which employed Machine Learning techniques to predict avalanche occurrences well in advance.</li><li>To make our Avalanche Forecasting Model more robust, we also made weather predictions using Facebook Prophet and used this additional set of data. This improved the accuracy from 80 percent to 90 percent, </li> <li>Using Django, we also created a front end interface, using which the user could interact and utilize our Avalanche Prediction System</li>",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    cardImage: "assets/images/experience-page/mlsa.png",
    place: "Microsoft",
    time: "(April, 2020 - Present)",
    desp: "<li>Became a Beta Level Microsoft Learn Student Ambassador for active community development and participation in the MLSA Program.</li><li>Actively organized hacakthons and workshops in our college promoting the Open Source Culture.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

