document.addEventListener('keydown', function(e){
    /* switch (e.code) {...*/

    //check if method in imageManager exists
    if (imageManager.hasOwnProperty(e.code)) {
        imageManager.execute(e.code)
    }
})

let imageManager = {
    image: document.querySelector('.twitter-picture'),
    ArrowUp: function () {
            this.image.style.top = this.image.offsetTop - 10 + 'px'
    },
    ArrowLeft: function (){
            this.image.style.left = this.image.offsetLeft - 10 + 'px'
    },
    ArrowRight: function (number){
            this.image.style.left = this.image.offsetLeft + 10 + 'px'
    },
    ArrowDown: function (number){
           this.image.style.top = this.image.offsetTop + 10 + 'px'
    },
}

imageManager.execute = function(key){
    let methodName = imageManager[key]
    return methodName.apply(imageManager)
}

setInterval(function(){

  let numberRandom = Math.floor((Math.random() *4))
  switch (numberRandom) {
    case 0:
      imageManager.ArrowUp()
      break;

    case 1:
      imageManager.ArrowLeft()
      break;

    case 2:
        imageManager.ArrowRight()
        break;

    case 3:
          imageManager.ArrowDown()
          break;

}

console.log(numberRandom)
    // add a random move
}, 500)
