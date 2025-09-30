//Sprite Class
class Sprite {
    //every sprite has a position
    constructor({position, imageSrc, frameRate = 1, frameBuffer = 80, scale = 1, canFlip = false, isFlipped = false}){
        this.position = position;
        this.scale = scale
        this.image = new Image()
        this.image.onload = () => {
            this.width = (this.image.width / this.frameRate) * this.scale
            this.height = (this.image.height) * this.scale
        }
        this.image.src = imageSrc //asign image to this .image
        this.frameRate = frameRate
        this.currentFrame = 0;
        this.frameBuffer = frameBuffer;
        this.elapsedFrames = 0;
        this.lastDirection = 0;
        this.canFlip = canFlip;
        this.isFlipped = isFlipped;
    }

    //call this
    draw(){
        if (!this.image){return} //if image is undefined (not loaded yet)
        //console.log(this.width)
        const cropbox = {
            position: {
                x: this.currentFrame * this.image.width / this.frameRate,
                y: (this.isFlipped === false ) ? 0 : this.image.height/2,
            },
            width: this.image.width / this.frameRate,
            height: (this.canFlip === false) ? this.image.height : this.image.height/2,
        }


        c.drawImage(this.image, 
            cropbox.position.x, 
            cropbox.position.y, 
            cropbox.width, 
            cropbox.height, 
            this.position.x, 
            this.position.y,
            this.width,
            this.height
        )
    }



    /**
     * If can flip, the starting position of the drop box is x as nromal, but the height is limited to HALF the height of the image. From the top of the image
     * to the halfway point
     * 
     * If the image is flipped, the starting point becomes the halfway pointof the image, with a height still equalling half the image size
     * 
     * Cropbox height is halved
     * y position of cropbox is change
     * 
     * if the image can flip, do the alteration
     */
    

    overlap(){
        if(player.hitbox.position.x + player.hitbox.width > this.position.x
            && player.hitbox.position.x + player.hitbox.width < this.position.x + this.width
            && player.hitbox.position.y + player.hitbox.height < this.position.y + this.height
            && player.hitbox.position.y + player.hitbox.height > this.position.y){
            console.log("Inside Area");
        }else{
            console.log("Nope")
        }
    }


    update() {
        this.draw()
        this.updateFrames()
    }

    updateFrames(){
        this.elapsedFrames++
        if(this.elapsedFrames % this.frameBuffer === 0){
            if(this.currentFrame < this.frameRate - 1) this.currentFrame++
                else this.currentFrame = 0
        }
    }
}