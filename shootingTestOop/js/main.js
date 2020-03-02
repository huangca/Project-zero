
// const shooter= document.getElementById("player-controlled");
// const mainArea=document.getElementById("main-play");

// function moveUp(){

// 	let topPosition=window.getComputedStyle(shooter).getPropertyValue('top');
// 	if(shooter.style.top==="0px"){
// 		return ;
// 	}
// 	else{
// 		let position=parseInt(topPosition);
// 		position -= 4;
// 		shooter.style.top=`${position}px`;
// 	}
// }

// function moveDown(){

// 	let topPosition=window.getComputedStyle(shooter).getPropertyValue('top');
// 	if(shooter.style.top==="360px"){
// 		return ;
// 	}
// 	else{
// 		let position=parseInt(topPosition);
// 		position += 4;
// 		shooter.style.top=`${position}px`;
// 	}
// }

// function moveLeft(){
// 	let leftPosition=window.getComputedStyle(shooter).getPropertyValue('left');
// 	if(shooter.style.left==="0px"){
// 		return ;
// 	}
// 	else{
// 		let position=parseInt(leftPosition);
// 		position -= 4;
// 		shooter.style.left=`${position}px`;
// 	}
// }

// function moveRight(){
// 	let leftPosition=window.getComputedStyle(shooter).getPropertyValue('left');
// 	if(shooter.style.left==="360px"){
// 		return ;
// 	}
// 	else{
// 		let position=parseInt(leftPosition);
// 		position += 4;
// 		shooter.style.left=`${position}px`;
// 	}
// }

// function letShipFlay(ev){
// 	if(ev.key==="ArrowUp"){
// 		ev.preventDefault();
// 		moveUp();
// 	}
// 	else if(ev.key==="ArrowDown"){
// 		ev.preventDefault();
// 		moveDown();
// 	}
// 	else if(ev.key=="ArrowLeft"){
// 		ev.preventDefault();
// 		moveLeft();
// 	}
// 	else if(ev.key=="ArrowRight"){
// 		ev.preventDefault();
// 		moveRight();
// 	}

// 	else if(ev.key===" "){
// 		ev.preventDefault();
// 		fireLaser();
// 	}

// }

// function fireLaser(){
// 	let laser=createLaserElement();
// 	$('#main-play').append(laser);
// 	moveLaser(laser);
// }

// function createLaserElement(){
// 	let xPosition=parseInt(window.getComputedStyle(shooter).getPropertyValue('left'));
// 	let yPosition= parseInt(window.getComputedStyle(shooter).getPropertyValue('top'));
// 	let newLaser=document.createElement('img');
// 	newLaser.src='images/beam.png';
// 	newLaser.classList.add('laser');
// 	newLaser.style.left=`${xPosition}px`;
// 	newLaser.style.top=`${yPosition-10}px`;
// 	return newLaser;
// }
// function moveLaser(laser){
// 	let laserInterval=setInterval(()=>{
// 		let xPosition=parseInt(laser.style.left);
// 		let monsters=document.querySelectorAll(".monster");
// 		monsters.forEach(monster=>{
// 			if(checkLaserCollision(laser,monster)){
// 				monster.src="";
// 				monster.classList.remove("monster");
// 				//monster.classList.add("dead-monster"); //may be will add later to count the point of player
// 			}
// 		});	


// 		if(xPosition===340){
// 			laser.style.display='none';
// 			laser.remove();
// 		}
// 		else{
// 			laser.style.left=`${xPosition+4}px`;
// 		}
// 	},10);
// }

// const monsterImgs=['images/monster1.png','images/monster2.png'];

// function createMonster(){
// 	let newMonster=document.createElement('img');
// 	let monsterImg=monsterImgs[Math.floor(Math.random()*monsterImgs.length)];
// 	newMonster.src=monsterImg;
// 	newMonster.classList.add('monster');
// 	newMonster.style.left='370px';
// 	newMonster.style.top=`${Math.floor(Math.random()*330)+30}px`;
// 	//$('#main-play').append(laser);
// 	mainArea.appendChild(newMonster);
// 	moveMonster(newMonster);

// }
// function moveMonster(monster){
// 	let moveMonsterInterval=setInterval(()=>{
// 		let xPosition=parseInt(window.getComputedStyle(monster).getPropertyValue('left'));
// 		if(xPosition<=50){
// 			monster.remove();
// 		}
// 		else{
// 			monster.style.left=`${xPosition-4}px`;
// 		}
// 	},30);
// }

// function checkLaserCollision(laser,monster){
// 	let laserLeft=parseInt(laser.style.left);
// 	let laserTop=parseInt(laser.style.top);
// 	let laserBottom=laserTop-20;
// 	let monsterTop=parseInt(monster.style.top);
// 	let monsterBottom=monsterTop-30;
// 	let monsterLeft=parseInt(monster.style.left);
// 	if(laserLeft!=340&&laserLeft+40>=monsterLeft){
// 		if(laserTop<=monsterTop&&laserTop>=monsterBottom){
// 			return true;
// 		}else {
// 			return false;
// 		}
// 	}
// 	else{
// 		return false;
// 	}
// }






/////////////////////////////
//try to do it oop
class Player{
	constructor(shooter){
		this.shooter=shooter;
	}
moveUp(){

	let topPosition=window.getComputedStyle(this.shooter).getPropertyValue('top');
	if(this.shooter.style.top==="0px"){
		return ;
	}
	else{
		let position=parseInt(topPosition);
		position -= 4;
		this.shooter.style.top=`${position}px`;
	}
}

 moveDown(){

	let topPosition=window.getComputedStyle(this.shooter).getPropertyValue('top');
	if(this.shooter.style.top==="360px"){
		return ;
	}
	else{
		let position=parseInt(topPosition);
		position += 4;
		this.shooter.style.top=`${position}px`;
	}
}

 moveLeft(){
	let leftPosition=window.getComputedStyle(this.shooter).getPropertyValue('left');
	if(this.shooter.style.left==="0px"){
		return ;
	}
	else{
		let position=parseInt(leftPosition);
		position -= 4;
		this.shooter.style.left=`${position}px`;
	}
}

 moveRight(){
	let leftPosition=window.getComputedStyle(this.shooter).getPropertyValue('left');
	if(this.shooter.style.left==="360px"){
		return ;
	}
	else{
		let position=parseInt(leftPosition);
		position += 4;
		this.shooter.style.left=`${position}px`;
	}
}
 fireLaser(){
	let laser=this.createLaserElement();
	$('#main-play').append(laser);
	this.moveLaser(laser);
}

 createLaserElement(){
	let xPosition=parseInt(window.getComputedStyle(this.shooter).getPropertyValue('left'));
	let yPosition= parseInt(window.getComputedStyle(this.shooter).getPropertyValue('top'));
	let newLaser=document.createElement('img');
	newLaser.src='images/beam.png';
	newLaser.classList.add('laser');
	newLaser.style.left=`${xPosition}px`;
	newLaser.style.top=`${yPosition-10}px`;
	return newLaser;
}
 moveLaser(laser){
	let laserInterval=setInterval(()=>{
		let xPosition=parseInt(laser.style.left);
		// let monsters=document.querySelectorAll(".monster");
		// monsters.forEach(monster=>{
		// 	if(checkLaserCollision(laser,monster)){
		// 		monster.src="";
		// 		monster.classList.remove("monster");
		// 		//monster.classList.add("dead-monster"); //may be will add later to count the point of player
		// 	}
		// });	


		if(xPosition===340){
			laser.style.display='none';
			laser.remove();
		}
		else{
			laser.style.left=`${xPosition+4}px`;
		}
	},10);
}

}

class Game{
	constructor(mainArea,player){
		this.mainArea=mainArea;
		this.player=player;
		console.log(this.mainArea,this.player);
	}
	gameStar(){
		window.addEventListener("keydown", this.letShipFlay.bind(this));
	}

	 letShipFlay(ev){
	if(ev.key==="ArrowUp"){
		ev.preventDefault();
		this.player.moveUp();
	}
	else if(ev.key==="ArrowDown"){
		ev.preventDefault();
		this.player.moveDown();
	}
	else if(ev.key=="ArrowLeft"){
		ev.preventDefault();
		this.player.moveLeft();
	}
	else if(ev.key=="ArrowRight"){
		ev.preventDefault();
		this.player.moveRight();
	}

	else if(ev.key===" "){
		ev.preventDefault();
		this.player.fireLaser();
	}

}
}
function play(){
	// window.addEventListener("keydown",letShipFlay);
	// let monsterInterval=setInterval(()=>{createMonster()},2000);
	const shooter= document.getElementById("player-controlled");
	const mainArea=document.getElementById("main-play");
	thisPlayer=new Player(shooter);
	thisGame=new Game(mainArea,thisPlayer);
	thisGame.gameStar();


}