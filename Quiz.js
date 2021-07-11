class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
    
  }

  play(){
    //write code here to hide question elements
    question.hide();
    background("yellow");
    fill("orange")
    textSize=(20);
    text("Result of the Quiz");
    Contestant.getPlayerInfo();
    if(allContesttants !==undefined){
      
      fill("blue");
      textSize=(25);
      text("NOTE: Contestant who answered correct are highlighted in green color",140,240);
    }
    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].ans)
      fill("green")
      else
      fill("red");

     
    }
    




    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined
    

    //write code to add a note here

    //write code to highlight contest who answered correctly

    
  }

}
