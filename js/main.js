
const scoreCounter=document.querySelector("#score span");
let bossLife=2;


function checkBoxInter(ele1,ele2){
	let recl=ele1.getBoundingClientRect();
	let recm=ele2.getBoundingClientRect();
	if(recl.left<=recm.right&&recl.right>=recm.left&&recl.top<=recm.bottom&&recl.bottom>=recm.top){	

			return true;
		}else {
			return false;
		}

	}
function gameOver(){
	window.removeEventListener("keydown",this.letShipFlay);
		clearInterval(thisGame.monsterInterval);
		clearInterval(thisGame.bossInterval);
		alert("game over");
		window.location.reload(false);
}
function victory(){
	clearInterval(thisGame.monsterInterval);
		clearInterval(thisGame.bossInterval);
		alert("Victory!");
}



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
		position -= 8;
		this.shooter.style.top=`${position}px`;
	}
}

 moveDown(){

	let topPosition=window.getComputedStyle(this.shooter).getPropertyValue('top');
	if(this.shooter.style.top==="800px"){
		return ;
	}
	else{
		let position=parseInt(topPosition);
		position += 8;
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
		position -= 8;
		this.shooter.style.left=`${position}px`;
	}
}

 moveRight(){
	let leftPosition=window.getComputedStyle(this.shooter).getPropertyValue('left');
	if(this.shooter.style.left==="600px"){
		return ;
	}
	else{
		let position=parseInt(leftPosition);
		position += 8;
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
	newLaser.src='images/laser_2.png';
	newLaser.classList.add('laser');
	newLaser.style.left=`${xPosition}px`;
	newLaser.style.top=`${yPosition-10}px`;
	return newLaser;
}
 moveLaser(laser){
	let laserInterval=setInterval(()=>{
		//let xPosition=parseInt(laser.style.left); //leave it here in case need to change
		let yPosition=parseInt(laser.style.top);

		let monsters=document.querySelectorAll(".monster");
		monsters.forEach(monster=>{ //to check laser hit the monster
			if(checkBoxInter(laser,monster)){
				laser.remove();
			if(monster.id=="boss"){
				if(bossLife>0){
					console.log("hit",bossLife);

					bossLife--;
				}else{
					monster.src="";
					monster.remove();
					victory();
				}
			}
			else{
				monster.src="images/boom.png";
				//monster.classList.remove("monster");
				setTimeout (function(){
					monster.remove();
				}
				,300); //test maybe change
				//monster.classList.add("dead-monster"); //may be will add later to count the point of player
				scoreCounter.innerText=parseInt(scoreCounter.innerText)+100;
				}
			}
		});


		if(yPosition===0){
			//laser.style.display='none';
			laser.remove();
		}
		else{
			laser.style.top=`${yPosition-4}px`;
		}
	},10);
}

 checkLaserCollision(laser,monster){
	let laserLeft=parseInt(laser.style.left);
	let laserTop=parseInt(laser.style.top);
	let laserBottom=laserTop+20;
	let laserRight=laserLeft+20;
	let monsterTop=parseInt(monster.style.top);
	let monsterBottom=monsterTop+30;
	let monsterLeft=parseInt(monster.style.left);
	let monsterRight=monsterLeft+30;
	let recl=laser.getBoundingClientRect();
	let recm=monster.getBoundingClientRect();
	if(laserTop!=0){

		//if(laserLeft<=monsterRight&&laserRight>=monsterLeft&&laserTop<=monsterBottom&&laserBottom>=monsterTop){
		if(recl.left<=recm.right&&recl.right>=recm.left&&recl.top<=recm.bottom&&recl.bottom>=recm.top){	

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


class monster{
		constructor(monsterImg){
	//this.monterImgs=monterImgs;
	let newMonster=document.createElement('img');
	newMonster.src=monsterImg;
	newMonster.classList.add('monster');
	newMonster.style.top='0px';
	newMonster.style.left=`${Math.floor(Math.random()*500)+30}px`;
	this.monster=newMonster;
		}

		moveMonster(){
			let ship=document.getElementById('player-controlled');
			let moveMonsterInterval=setInterval(()=>{
				if(checkBoxInter(this.monster,ship)){
					ship.remove();
				}
		//let xPosition=parseInt(window.getComputedStyle(this.monster).getPropertyValue('left'));
		let yPosition=parseInt(window.getComputedStyle(this.monster).getPropertyValue('top'));

		if(yPosition>=790){
			this.monster.remove();
		}
		else{
			this.monster.style.top=`${yPosition+4}px`;
			}
	},30);
		}

		checkLaserCollisionShip(laser,ship){
			if(ship===null) return;
	let laserLeft=parseInt(laser.style.left);
	let laserTop=parseInt(laser.style.top);
	let laserBottom=laserTop+30;
	let laserRight=laserLeft+30;
	let shipTop=parseInt(ship.style.top);
	let shipBottom=shipTop+30;
	let shipLeft=parseInt(ship.style.left);
	let shipRight=shipLeft+30;
	if(laserTop!==790){

		if(laserLeft<=shipRight&&laserRight>=shipLeft&&laserTop<=shipBottom&&laserBottom>=shipTop){
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
	newLaser.src='images/fire.png';
	newLaser.classList.add('Beam');
	newLaser.style.left=`${xPosition}px`;
	newLaser.style.top=`${yPosition+10}px`;
	return newLaser;
}
 moveLaser(laser){
///////I do not want the beam track too mach so just follow the ox oy
// 	let ox=parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
		let ship=document.getElementById('player-controlled');

	//let oy= parseInt(window.getComputedStyle(ship).getPropertyValue('top'));
	let ox= parseInt(window.getComputedStyle(ship).getPropertyValue('left'));



	let laserInterval=setInterval(()=>{
	//	let ship=document.getElementById('player-controlled');
 // 	let x=parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
	// let y= parseInt(window.getComputedStyle(ship).getPropertyValue('top'));

		if(checkBoxInter(laser,ship)){
				ship.remove();
				laser.remove();
				//ship.classList.remove("monster");
				//monster.classList.add("dead-monster"); //may be will add later to count the point of player
			}
		let xPosition=parseInt(laser.style.left);
		let yPosition=parseInt(laser.style.top);


		if(yPosition>=800){
			//laser.style.display='none';
			laser.remove();
		}
		else{
			laser.style.top=`${yPosition+4}px`;
			if(xPosition>ox){
				laser.style.left=`${xPosition-1}px`;
			}
			else if(xPosition<ox){
				laser.style.left=`${xPosition+1}px`;
			}


		}
	},10);
}

checkLaserCollisionShip(laser,ship){
	if(ship===null) return;
	let laserLeft=parseInt(laser.style.left);
	let laserTop=parseInt(laser.style.top);
	let laserBottom=laserTop+20;
	let laserRight=laserLeft+20;
	let shipTop=parseInt(ship.style.top);
	let shipBottom=shipTop+30;
	let shipLeft=parseInt(ship.style.left);
	let shipRight=shipLeft+30;
	if(laserTop!=0){

		if(laserLeft<=shipRight&&laserRight>=shipLeft&&laserTop<=shipBottom&&laserBottom>=shipTop){
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
		constructor(monsterImg='images/monster_w.png'){
		super(monsterImg);
		this.monster.style.top=`300px`;
	}
	moveMonster(){
		super.moveMonster();
	}
}

class boss extends monster{
	constructor(monsterImg="images/boss.png"){
		super(monsterImg);
		this.monster.id="boss";

	}
	moveMonster(){
		let flag=0;
		let moveMonsterInterval=setInterval(()=>{
		let xPosition=parseInt(window.getComputedStyle(this.monster).getPropertyValue('left'));
		if(flag===0&&xPosition>=100){
			this.monster.style.left=`${xPosition-4}px`;
		}
		else if(flag===1&&xPosition<=500){
			this.monster.style.left=`${xPosition+4}px`;
			}
		else if(xPosition>500){
			flag=0;
		}
		else if(xPosition<100){
			flag=1;
		}
	},30);
	}
	fireBoss(){
		if(document.getElementById('player-controlled')===null) {
			gameOver();
		}else{
		let laser=this.createLaserElement();
		let laser2=this.createLaserElement();
		let laser3=this.createLaserElement();
	$('#main-play').append(laser);
	$('#main-play').append(laser2);
	$('#main-play').append(laser3);
	this.moveLaser(laser);
	this.moveLaser(laser2);
	this.moveLaser(laser3);
}
	}


 createLaserElement(){
	// let xPosition=parseInt(window.getComputedStyle(this.monster).getPropertyValue('left'));
	// let yPosition= parseInt(window.getComputedStyle(this.monster).getPropertyValue('top'));
	
	let xPosition=Math.floor(Math.random()*500+50);
	let yPosition=Math.floor(Math.random()*400+50);
	let newLaser=document.createElement('img');
	newLaser.src='images/beam_boss2.png';
	newLaser.classList.add('Beam');
	newLaser.style.left=`${xPosition}px`;
	newLaser.style.top=`${yPosition+10}px`;
	return newLaser;
}
 moveLaser(laser){
///////I do not want the beam track too mach so just follow the ox oy
// 	let ox=parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
		let ship=document.getElementById('player-controlled');

	//let oy= parseInt(window.getComputedStyle(ship).getPropertyValue('top'));
	let ox= parseInt(window.getComputedStyle(ship).getPropertyValue('left'));



	let laserInterval=setInterval(()=>{
	//	let ship=document.getElementById('player-controlled');
 // 	let x=parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
	// let y= parseInt(window.getComputedStyle(ship).getPropertyValue('top'));

		if(checkBoxInter(laser,ship)){
				ship.remove();
				//ship.classList.remove("monster");
				//monster.classList.add("dead-monster"); //may be will add later to count the point of player
			}
		let xPosition=parseInt(laser.style.left);
		let yPosition=parseInt(laser.style.top);


		if(yPosition>=800){
			//laser.style.display='none';
			laser.remove();
		}
		else{
			laser.style.top=`${yPosition+2}px`;
			if(xPosition>ox){
				laser.style.left=`${xPosition-1}px`;
			}
			else if(xPosition<ox){
				laser.style.left=`${xPosition+1}px`;
			}


		}
	},10);
}

}



class Game{
	constructor(mainArea,player,monsterInterval=0,bossInterval=0){
		this.mainArea=mainArea;
		this.player=player;
		//console.log(this.mainArea,this.player);
	}
	gameStar(){
		window.addEventListener("keydown", this.letShipFlay.bind(this));

		//window.addEventListener("gamepadconnected", this.letShipFlay.bind(this));
		
		this.monsterInterval=setInterval(()=>{this.createMonster()},2000);
	}
	gameOver(){
		// window.removeEventListener("keydown",this.letShipFlay);
		// clearInterval(this.monsterInterval);
		// console.log(this.monsterInterval);
		// alert("game over");
		gameOver();


	}

	 letShipFlay(ev){
	 //console.log(ev);  //||ev.key===navigator.getGamepads()[0].buttons[0]
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
		if(parseInt(scoreCounter.innerText)>=500){
			this.createBoss();
			return ;
		}
		if(document.getElementById('player-controlled')=== null){
			this.gameOver();
		}
		if(Math.floor(Math.random()*2)===0){
			let monster=new monsterRed();
			this.mainArea.appendChild(monster.monster);
			monster.moveMonster();
			setTimeout(function() { 
				monster.monsterFire();
			}, 1000);

		}
		else{
			let monster=new monsterBlack();
			this.mainArea.appendChild(monster.monster);
			monster.moveMonster();
		}
	}
	createBoss(){
		clearInterval(this.monsterInterval);
		let Boss=new boss();
		this.mainArea.appendChild(Boss.monster);
		Boss.moveMonster();
		this.bossInterval=setInterval(()=>{Boss.fireBoss()},2000);

	}


}
function play(){
	const shooter= document.getElementById("player-controlled");
	const mainArea=document.getElementById("main-play");
	thisPlayer=new Player(shooter);
	thisGame=new Game(mainArea,thisPlayer);
	thisGame.gameStar();


}
