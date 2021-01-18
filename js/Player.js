class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.value = 0;
    this.rank = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      value:this.value
      
    });
  }

  getRank(){
    var playerRankRef = database.ref('/');
    playerRankRef.on("value",(data)=>{
      this.rank = data.val();
    })
  }

  updateRank(r){
    database.ref("/").update({
      rank: r
    })
  }

 

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
