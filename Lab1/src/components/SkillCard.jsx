import './SkillCard.css';

export default function SkillCard({ title, bgColor }) {
  return (
    <div className="col">
      <div 
        className="card d-flex justify-content-center align-items-center transition hover-translate-up" 
        style={{ 
          backgroundColor: bgColor, 
          height: 250,    
        }}
      >
        <div className="card-body d-flex justify-content-center align-items-center">
          <h5 className="card-title text-center text-white">{title}</h5>
        </div>
      </div>
    </div>
  );
}
