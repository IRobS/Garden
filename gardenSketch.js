var mapWidth = 30;
var mapHeight = 15;


//images
var char1Img;
var grass1Img;

//sprites
var char1Sprite;
var grass1Sprites = [];

function preload() {
  char1Img = loadImage('assets/character1.png');
  grass1Img = loadImage('assets/grassTile1.png');
}

function setup() {
  // put setup code here
  createCanvas(1000, 800);
  
  char1Sprite = createSprite(50,50, 100, 100);
  char1Sprite.addImage(char1Img);
  char1Sprite.depth = 5;
  setupTiles();
}

function setupTiles()
{
  for(var j = 0; j < mapHeight; j++)
  { 
    var tileRow = [];
    for(var i = 0; i < mapWidth; i++) {
      var newTileSprite = createSprite();
      newTileSprite.addImage(grass1Img);
      newTileSprite.position.x = i * 100;
      newTileSprite.position.y = j * 100;
      newTileSprite.depth = 1;
      tileRow.push(newTileSprite);
    }
  }
  grass1Sprites.push(tileRow);
}

function drawTiles()
{
  
}

function draw() {
  // put drawing code here
  background(115, 155, 90);
  
  
    if (keyIsDown(LEFT_ARROW)) {
    char1Sprite.position.x = char1Sprite.position.x - 6;

  }

  if (keyIsDown(RIGHT_ARROW)) {
    char1Sprite.position.x = char1Sprite.position.x + 6;

  }
  if (keyIsDown(UP_ARROW)) {
    char1Sprite.position.y = char1Sprite.position.y - 6;

  }
  if (keyIsDown(DOWN_ARROW)) {
    char1Sprite.position.y = char1Sprite.position.y + 6

  }
  
  
  //set the camera position to the player position
  camera.position.x = char1Sprite.position.x;
  camera.position.y = char1Sprite.position.y;
  
  
    drawSprites();
}