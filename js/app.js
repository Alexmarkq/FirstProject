const app = {
    appName: 'Canvas game',
    version: '1.0.0',
    licensed: undefined,
    author: 'Alexis Marquez & Alberto Naval',
    ctx: undefined,
    FPS: '60',
    framesCounter: 0,

    canvasSize: {  w: undefined,  h: undefined, },

    backGround: undefined,
    player: undefined,

    init() {
        this.setDimensions()
        this.setContext()
        this.start()

        //console.log(this.player)
    },


    start() {
    this.reset()
        setInterval(() => {
            this.clear()
            this.drawAll()


        }, 1000/ this.FPS)
    },

    //ESTABLECER LOS FPS PARA PONERLE VELOCIDAD AL JUEGO.


    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight,
        }
        document.querySelector('#myCanvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('#myCanvas').setAttribute('height', this.canvasSize.h)

    },

    clear() {
        this.ctx.clearRect(0,0,this.canvasSize.w, this.canvasSize.h)
    },

    setContext() {
        this.ctx = document.querySelector('#myCanvas').getContext('2d')
    },

    reset() {
        this.player = new Player(this.ctx, this.canvasSize)
        this.backGround = new BackGround(this.ctx, this.canvasSize)
    },

    drawAll() {
        this.backGround.drawBackground()
        //this.backGround.move()
        this.player.drawPlayer()
        this.player.move()
        this.player.setEventHandlers()
    }
}