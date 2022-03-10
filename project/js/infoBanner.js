AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      comicsInfo = {
        "spider-man": {
          banner_url: "./assets/banner/spiderman.jpg",
          title: "Amazing Spider-Man:\nThe Night Gwen Stacy Died",
          released_year: "1973",
          description:
            "The Green Goblin abducts Spider-Man's girlfriend Gwen Stacy, and she is killed during the battle. Separately, issue #121 is also named 'Turning Point' and #122 is named 'The Goblin's Last Stand!'.",
        },
        daredevil: {
          banner_url: "./assets/banner/daredevil.jpg",
          title: "Daredevil:\nBorn Again",
          released_year: "1986",
          description:
            "Matt Murdock's personal life and career spiral out of control after the Kingpin learns his secret identity as Daredevil from a drug-addicted ex-lover and uses the information to destroy him.",
        },
        xmen: {
          banner_url: "./assets/banner/xmen.jpg",
          title: "X-Men:\nAge of Apocalypse",
          released_year: "1995",
          description:
            " The Age of Apocalypse briefly replaced the universe of Earth-616 and had ramifications in the main Marvel Comics universe when the original timeline was restored.",
        },
        "infinity-guantlet": {
          banner_url: "./assets/banner/infinity.jpg",
          title: "Infinity Gauntlet",
          released_year: "1991",
          description:
            "The Mad Titan Thanos has seized control of Infinity Gauntlet and with it near-omnipotent power! Who can stop this deadly new overlord? All of Marvel's top heroes star in this epic of cosmic proportions!",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 1,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = comicsInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width:0.95,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} \n ${item.released_year}`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.05, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.26, z: 0.05 });
      return entityEl;
    },
  });