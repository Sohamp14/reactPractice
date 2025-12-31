import React from 'react'
import Card from './Components/card'


const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbpIfA-_GwTVZBVlpCvdIcLVOsCxn4BmqHA&s",
      company: "Meta",
      datePosted: "3 days ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Menlo Park, CA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s",
      company: "Apple",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$85/hr",
      location: "Cupertino, CA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnYPXIDmRTKpj1drsmIRD_0NJJLVIVnMJNA&s",
      company: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
      company: "Netflix",
      datePosted: "2 weeks ago",
      post: "Interaction Designer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$95/hr",
      location: "Los Gatos, CA"
    },
    {
      brandLogo: "https://img.freepik.com/premium-vector/google-logo_1273375-1572.jpg?semt=ais_hybrid&w=740&q=80",
      company: "Google",
      datePosted: "10 weeks ago",
      post: "Visual Designer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$90/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://icon2.cleanpng.com/20180824/wox/kisspng-microsoft-corporation-microsoft-software-assurance-26-microsoft-1713948935718.webp",
      company: "Microsoft",
      datePosted: "4 days ago",
      post: "Design Systems Lead",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$130/hr",
      location: "Redmond, WA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/484/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
      company: "Tesla",
      datePosted: "6 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$100/hr",
      location: "Austin, TX"
    },
    {
      brandLogo: "https://i.pinimg.com/474x/8d/be/b6/8dbeb6a2567699b70b0ff57d18ecb604.jpg",
      company: "Adobe",
      datePosted: "3 weeks ago",
      post: "Creative UX Strategist",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$115/hr",
      location: "San Jose, CA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg",
      company: "Intel",
      datePosted: "2 days ago",
      post: "UX Researcher",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$105/hr",
      location: "Chandler, AZ"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      company: "NVIDIA",
      datePosted: "1 month ago",
      post: "Senior Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$125/hr",
      location: "Santa Clara, CA"
    }
  ];
  console.log(jobOpenings);
  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return (<div key={idx}>
          <Card
            brandLogo={elem.brandLogo}
            company={elem.company}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
          </div>
        );

      })}
    </div>
  )
}

export default App