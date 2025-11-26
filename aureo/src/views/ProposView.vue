<template>
  <div class="container_propos">
    <div class="titre">Aureo *</div>
    <div class="texte">
      Aureo est votre espace personnel dédié aux images qui vous inspirent.
      Déposez, classez et retrouvez facilement vos illustrations favorites.
      Pensé pour les créatifs, Aureo simplifie la sauvegarde visuelle et vous
      aide à construire une bibliothèque d'inspirations unique, accessible
      partout et à tout moment.
    </div>

    
    
    
  </div>



  <h2 class="contributeurs">Contributeurs</h2>

  <div class="container_namecard">
  <div class="namecard" id="test"> Alexandre Gendron </div>
  <div class="namecard" id="test2"> Mikael Arseneau </div>
  <div class="namecard" id="test3"> Rafael Angon Dubé </div>
  </div>
  <div class="wow titre"> RAHHHHH</div>



  <router-link to="/">
      <p class="propos">&nbsp;menu dawg&nbsp;</p>
    </router-link>

</template>

<style scoped>
.container_propos {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin:  0.8rem;
}
.propos{


text-decoration: none;
text-align: center;
color: #1a1a1a;
font-size: 2rem;

}

router-link {

  margin: 0.8rem;

}

.titre {
  color: #1a1a1a;
  font-family: "switzer";
  font-weight: 600;
  text-align: left;
  align-self: flex-start;
  justify-self: start;
  font-size: 100px;
}

.texte {
  color: #1a1a1a;
}

.contributeurs{


color: #1a1a1a;
font-size: 5rem;
font-family: "switzer";
font-weight: 600;
margin: 0.8rem;


}

.container_namecard{

display: flex;
flex-direction: column;
width: 100vw;
align-items: center;

}




#test{

  border-top: #1a1a1a 1px solid;
}

#test:hover .wow{


  background-color: #1a1a1a;


}


.namecard{

color: #1a1a1a;
font-size: 3rem;
font-family: "switzer";
font-weight: 400;
border-bottom: #1a1a1a 1px solid;
width: 100%;
padding-left: 0.8rem;
transition: all 0.2s ease-in-out;

}

.namecard:hover{


background-color: #1a1a1a;
color: #f3f3f3;



}



.wow{


display: block;

}
.titre:hover{
  cursor: url("/Image-1.svg") 0 0, auto;
}
</style>
<script setup>
import { onMounted } from "vue";
import router from "../router";




// Source - https://stackoverflow.com/a
// Posted by Jack Bashford, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-26, License - CC BY-SA 4.0

onMounted(() => {

  const alexandre = document.getElementById("test");

  const mikael = document.getElementById("test2");
  
  const rafael = document.getElementById("test3");



// function interval() {
//   alert("hover");
//     while (true) {
//         setInterval(showImage, 1);
//     }
// }

// function showImage() {

//     var x = Event.clientX;
//     var y = Event.clientY;
//     var image = document.getElementById("wow");
//     image.style.left = x;
//     image.style.top = y;
    
//  }






alexandre.addEventListener("mouseenter", () => {
    
  });


mikael.addEventListener("mouseenter", () => {
    
  });


rafael.addEventListener("mouseenter", () => {
    
  });




  // showImage()

});



</script>
