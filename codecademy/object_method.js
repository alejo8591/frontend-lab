var comedy = {
  schadenfreude: function(n){
      n===1 ? alert('schadenfreude is a German word meaning the pleasure derived from the misfortunes of others.'): this.irony(); 
  },
  irony: function(){
      alert('is ironymna');
  },
  slapstick: function(n){
      if(n === "Hollande" && n !=="Murdoch" && n !== "Gates"){
          return "Flour";
      }else{
          return (n === "Murdoch" || n ==="Gates" && n !== "Hollande") ? "Pie!" : "Make Up!";
      }
  }
};
comedy.slapstick(prompt("escribalo"));
