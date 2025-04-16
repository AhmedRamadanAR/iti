const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#00BFFF');  // Sky blue (top)
  gradient.addColorStop(0.5, '#00BFFF'); 
  gradient.addColorStop(0.5, '#7CFC00'); // Grass green (middle)
  gradient.addColorStop(1, '#FFFFFF');  // White (bottom, unused)
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawGoalpost() {
  const centerX = canvas.width / 2;
  const crossbarY = canvas.height * 0.4;
  const postHeight = 100;
  const crossbarWidth = 120;

  ctx.beginPath();
  ctx.moveTo(centerX - crossbarWidth / 2, crossbarY);
  ctx.lineTo(centerX + crossbarWidth / 2, crossbarY);
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'black';
  ctx.stroke();

  const leftGradient = ctx.createLinearGradient(0, crossbarY, 0, crossbarY + postHeight);
  leftGradient.addColorStop(0, 'black');
  leftGradient.addColorStop(1, 'transparent');
  
  ctx.beginPath();
  ctx.moveTo(centerX - crossbarWidth / 2, crossbarY);
  ctx.lineTo(centerX - crossbarWidth / 2, crossbarY + postHeight);
  ctx.lineWidth = 3;
  ctx.strokeStyle = leftGradient;
  ctx.stroke();

  const rightGradient = ctx.createLinearGradient(0, crossbarY, 0, crossbarY + postHeight);
  rightGradient.addColorStop(0, 'black');
  rightGradient.addColorStop(1, 'transparent');
  
  ctx.beginPath();
  ctx.moveTo(centerX + crossbarWidth / 2, crossbarY);
  ctx.lineTo(centerX + crossbarWidth / 2, crossbarY + postHeight);
  ctx.lineWidth = 3;
  ctx.strokeStyle = rightGradient;
  ctx.stroke();
}

function drawScene() {
  drawBackground();
  drawGoalpost();
}

drawScene();