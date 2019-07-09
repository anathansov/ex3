// נכין 4 ישויות - קלאסים
let db={
  travelList:[],
  regList:[]
}
let Travel= function Travel(name,price){
// constractor
  this.ID=db.travelList.length==0 ? 1:db.travelList[db.travelList.length-1].ID+1;
  this.Name=name;
  this.Price=price;
  this.getTotalPrice=function getTotalPrice(num){
    return num*this.Price;
  }
}
Travel.getTravelsCount=function getTotalCount(num)
{return db.travelList.length;
}



db.travelList.push( new Travel('holand',100));
db.travelList.push( new Travel('israel',200));
db.travelList.push( new Travel('london',300));
db.travelList.push( new Travel('prag',400));
db.travelList.push( new Travel('meron',500));

let travelListElem=document.getElementById('travel-list');
db.travelList.foreach(_t => travelListElem.innerHTML += Travel.buildTravelHTML(_t))
