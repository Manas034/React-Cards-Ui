

import Card from '../components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Data Analyst",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "8 days ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "2 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "4 days ago",
    post: "Automation Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "7 days ago",
    post: "AI Research Scientist",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC18C40i7FDe_9S95iMH-HiJHppenc6OPUAg&s",
    companyName: "Adobe",
    datePosted: "9 days ago",
    post: "UX Researcher",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/021/514/859/non_2x/ibm-logo-brand-software-computer-symbol-gray-design-illustration-free-vector.jpg",
    companyName: "IBM",
    datePosted: "1 day ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$70/hour",
    location: "Bangalore, India"
  }
];

  return (
   <div className='parent'>
    {jobOpenings.map(function(elem,idx){

       return<div key={idx}> 
       {/* /*key har ek element unique bhi ban jata hai aur sabko key bhi paas ho jati hai*/ }
      <Card company={elem.companyName} logo={elem.brandLogo} position={elem.post} date={elem.datePosted} taga={elem.tag1} tagb={elem.tag2} salary={elem.pay} place={elem.location}/>
      </div>
    })}
    </div>
  )
}

export default App
