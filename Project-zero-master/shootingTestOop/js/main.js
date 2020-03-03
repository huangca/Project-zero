
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
		let monsters=document.querySelectorAll(".monster");
		monsters.forEach(monster=>{ //to check laser hit the monster
			if(this.checkLaserCollision(laser,monster)){
				monster.src="";
				monster.classList.remove("monster");
				//monster.classList.add("dead-monster"); //may be will add later to count the point of player
			}
		});


		if(xPosition===340){
			laser.style.display='none';
			laser.remove();
		}
		else{
			laser.style.left=`${xPosition+4}px`;
		}
	},10);
}

 checkLaserCollision(laser,monster){
	let laserLeft=parseInt(laser.style.left);
	let laserTop=parseInt(laser.style.top);
	let laserBottom=laserTop-20;
	let monsterTop=parseInt(monster.style.top);
	let monsterBottom=monsterTop-30;
	let monsterLeft=parseInt(monster.style.left);
	if(laserLeft!=340&&laserLeft+40>=monsterLeft){
		if(laserTop<=monsterTop&&laserTop>=monsterBottom){
			return true;
		}else {
			return false;
		}
	}
	else{
		return false;
	}
}


}

const monsterImgs=['images/monster1.png','images/monster2.png'];

class monster{
		constructor(monsterImg){
	//this.monterImgs=monterImgs;
	let newMonster=document.createElement('img');
	newMonster.src=monsterImg;
	newMonster.classList.add('monster');
	newMonster.style.left='800px';
	newMonster.style.top=`${Math.floor(Math.random()*330)+30}px`;
	this.monster=newMonster;
		}

		moveMonster(){
			let moveMonsterInterval=setInterval(()=>{
		let xPosition=parseInt(window.getComputedStyle(this.monster).getPropertyValue('left'));
		if(xPosition<=50){
			this.monster.remove();
		}
		else{
			this.monster.style.left=`${xPosition-4}px`;
			}
	},30);
		}



}
class monsterRed extends monster{
	constructor(monsterImg='images/monster1.png'){
		super(monsterImg);
	}


	moveMonster(){
			super.moveMonster();
	}
	monsterFire(){
	let laser=this.createLaserElement();
	$('#main-play').append(laser);
	this.moveLaser(laser);
}


 createLaserElement(){
	let xPosition=parseInt(window.getComputedStyle(this.monster).getPropertyValue('left'));
	let yPosition= parseInt(window.getComputedStyle(this.monster).getPropertyValue('top'));
	let newLaser=document.createElement('img');
	newLaser.src='images/beam.png';
	newLaser.classList.add('Beam');
	newLaser.style.left=`${xPosition}px`;
	newLaser.style.top=`${yPosition-10}px`;
	return newLaser;
}
 moveLaser(laser){
///////I do not want the beam track too mach so just follow the ox oy
// 	let ox=parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
		let ship=document.getElementById('player-controlled');

	let oy= parseInt(window.getComputedStyle(ship).getPropertyValue('top'));


	let laserInterval=setInterval(()=>{
	//	let ship=document.getElementById('player-controlled');
 // 	let x=parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
	// let y= parseInt(window.getComputedStyle(ship).getPropertyValue('top'));

		if(this.checkLaserCollisionShip(laser,ship)){
				ship.remove();
				//ship.classList.remove("monster");
				//monster.classList.add("dead-monster"); //may be will add later to count the point of player
			}
		let xPosition=parseInt(laser.style.left);
		let yPosition=parseInt(laser.style.top);


		if(xPosition===0){
			laser.style.display='none';
			laser.remove();
		}
		else{
			laser.style.left=`${xPosition-1}px`;
			if(yPosition>oy){
				laser.style.top=`${yPosition-1}px`;
			}
			else if(yPosition<oy){
				laser.style.top=`${yPosition+1}px`;
			}


		}
	},10);
}

checkLaserCollisionShip(laser,ship){
	let laserLeft=parseInt(laser.style.left);
	let laserTop=parseInt(laser.style.top);
	let laserBottom=laserTop-20;
	let shipTop=parseInt(ship.style.top);
	let shipBottom=shipTop-20;
	let shipLeft=parseInt(ship.style.left);
	if(laserLeft!=0&&laserLeft-40<=shipLeft&&laserLeft>=shipLeft){
		if(laserTop<=shipTop&&laserTop>=shipBottom){
			return true;
		}else {
			return false;
		}
	}
	else{
		return false;
	}
}

}

class monsterBlack extends monster{
		constructor(monsterImg='images/monster2.png'){
		super(monsterImg);
	}
	moveMonster(){
		super.moveMonster();
	}
}
// class boss extends monster{
// 	constructor(monsterImg){
// 		super()
// 	}
// }



class Game{
	constructor(mainArea,player){
		this.mainArea=mainArea;
		this.player=player;
		//console.log(this.mainArea,this.player);
	}
	gameStar(){
		window.addEventListener("keydown", this.letShipFlay.bind(this));
		let monsterInterval=setInterval(()=>{this.createMonster()},2000);
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
	createMonster(){
		if(Math.floor(Math.random()*2)===0){
			let monster=new monsterRed();
			this.mainArea.appendChild(monster.monster);
			monster.moveMonster();
			monster.monsterFire();
		}
		else{
			let monster=new monsterBlack();
			this.mainArea.appendChild(monster.monster);
			monster.moveMonster();
		}
	}


}
function play(){
	const shooter= document.getElementById("player-controlled");
	const mainArea=document.getElementById("main-play");
	thisPlayer=new Player(shooter);
	thisGame=new Game(mainArea,thisPlayer);
	thisGame.gameStar();


}
