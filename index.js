

const milestonesData = JSON.parse(data).data;

function loadMilestoneData(){
    const milestone = document.querySelector('.milestones');

    milestone.innerHTML = `${milestonesData.map(function milestone(element){

        return `<div class="milestones">
        <div class="milestone border-b">
          <div class="flex">
            <div class="checkbox"><input type="checkbox" /></div>
            <div onclick = "openMilestone(this, ${element._id})">
              <p>
                ${element.name}
                <span><i class="fas fa-chevron-down"></i></span>
              </p>
            </div>
          </div>
          <div class="hidden_panel">
           ${element.modules.map(function module(module){
            return ` <div class="module border-b">
                    <p>${module.name}</p>
                     </div>`;
           }).join(" ")}
          </div>
        </div>
      </div>`;

    }).join("")}`;
}




function openMilestone(openElement, id){

const currentPanel= openElement.parentNode.nextElementSibling;
const showPanel = document.querySelector(".show");
const activeClass = document.querySelector(".active");

if (activeClass && !openElement.classList.contains("active")){
   activeClass.classList.remove("active");
    
}
 
openElement.classList.toggle("active");

if (!currentPanel.classList.contains('show') && showPanel)
    showPanel.classList.remove('show');

   currentPanel.classList.toggle('show');



   showElementId(id)
}



loadMilestoneData();



function showElementId(id){

const elementImage = document.querySelector(".milestoneImage");
const title = document.querySelector('.title');
const details = document.querySelector(".details");

elementImage.style.opacity = "0";
title.innerText = milestonesData[id].name;
details.innerText = milestonesData[id].description;
elementImage.src = milestonesData[id].image;

}


 
const elementImage = document.querySelector(".milestoneImage");
elementImage.onload = function loadimage(){
  this.style.opacity = "1";
  console.log('this is so easy');
}


