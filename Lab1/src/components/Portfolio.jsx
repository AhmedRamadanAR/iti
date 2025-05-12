import SkillCard from './SkillCard';

export default function Portfolio() {
  const cardData = [
    { title: 'Mobile App Development',bgColor: 'rgb(50, 53, 66)'},
    { title: 'Full Stack Web Development',bgColor: 'rgb(50, 53, 53)'},
    { title: 'Front End Development',bgColor: 'rgb(50, 53, 66)'},
    { title: 'Back End Development',bgColor: 'rgb(50, 53, 53)'},
    { title: 'Flutter',bgColor: 'rgb(50, 53, 66)'},
    { title: 'Django',bgColor: 'rgb(50, 53, 53)'},
  ];

  return (
    <>
  <div className=' col-md-4 my-4 d-flex justify-content-center align-items-center'>
  <h1 className=" display-2 fw-bold 
  "   style={{ textShadow: '5px 2px 2px rgba(0, 0, 0, 0.5)' }}
>Portfolio</h1>
</div>

    <br/>
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardData.map((card) => (
          <SkillCard
       
            title={card.title}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </div>
</> );
}