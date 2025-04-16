window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const outerGradient = ctx.createRadialGradient(150, 150, 100, 150, 150, 150);
    outerGradient.addColorStop(0, '#4a8df7');
    outerGradient.addColorStop(1, '#1a3d7c');
    ctx.fillStyle = outerGradient;
    ctx.beginPath();
    ctx.arc(150, 150, 150, 0, Math.PI * 2);
    ctx.fill();

    const innerGradient = ctx.createRadialGradient(150, 150, 50, 150, 150, 100);
    innerGradient.addColorStop(0, '#ffffff');
    innerGradient.addColorStop(1, '#4a8df7');

    ctx.fillStyle = innerGradient;
    ctx.beginPath();
    ctx.arc(150, 150, 110, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'gray';
    ctx.font = 'bold 100px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', 150, 150);
};