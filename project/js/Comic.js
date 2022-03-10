AFRAME.registerComponent("comic",{
    init: function(){
        this.placesContainer = this.el;

        this.createCards();
    },
    createCards: function(){
        const thumbNailsRef = [
            {
                id:"spider-man",
                title:"Amazing Spider-Man:\nThe Night Gwen Stacy Died",
                url:"./assets/thumbnails/spiderman.jpg"
            },
            {
                id:"daredevil",
                title:"Daredevil:\nBorn Again",
                url:"./assets/thumbnails/daredevil.jpg"
            },
            {
                id:"xmen",
                title:"X-Men:\nAge of Apocalypse",
                url:"./assets/thumbnails/xmen.jpg"
            },
            {
                id:"infinity-guantlet",
                title:"Infinity Gauntlet",
                url:"./assets/thumbnails/infinity.jpg"
            },
        ];
        let prevoiusXPosition = -75;

        for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 30;
        const posY = 5;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;

        // Border Element
        const borderEl = this.createBorder(position,item.id)

        // Thumbnail Element
        const thumbnailEl = this.createThumbnail(item)
        borderEl.appendChild(thumbnailEl)

        // Title Text Element
        const titleEl = this.createTitle(position,item)
        borderEl.appendChild(titleEl)

        
        this.placesContainer.appendChild(borderEl);
        }
    },
    createBorder: function(position,id){
        const entityEl = document.createElement('a-entity');
        
        entityEl.setAttribute('id',id);
        entityEl.setAttribute('visible',true);
        entityEl.setAttribute('position',position);
        entityEl.setAttribute('geometry',{
            primitive: "plane",
            width: 22,
            height: 30
        });
        entityEl.setAttribute("material", { color: "#fff" });
        entityEl.setAttribute("cursor-listener", {});


        return entityEl;

    },
    createThumbnail: function(item){
        const entityEl = document.createElement('a-entity');
        
        entityEl.setAttribute('visible',true);
        entityEl.setAttribute('geometry',{
          primitive:'plane',
          width:20,
          height:28,
        });
        entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });
        entityEl.setAttribute('material',{
          src:item.url
        });
        
    
        return entityEl;
    
      },
      createTitle: function(position,item){
        const entityEl = document.createElement('a-entity');
        
        entityEl.setAttribute('text',{
          font: 'exo2bold',
          align: 'center',
          width: 100,
          color: '#000',
          value: item.title
    
        });
        entityEl.setAttribute('visible',true);
    
        const elPosition = position;
        elPosition.y = -35;
    
        entityEl.setAttribute('position',elPosition);
    
        return entityEl;
      }
})