const getDetails=async(url)=>{

    try{
        
        let response=await fetch(url)
        let data= await response.json()
        return data;
  }
  catch(err)
  {
      console.log(err)
  }

}

  


const appendData=(data,parent)=>{
    parent.innerHTML=""
    data.meals.forEach((element) => {
    var mainDiv=document.createElement('div')
    mainDiv.setAttribute("id","showData")
    
    let imageDiv=document.createElement('div')
    var image=document.createElement('img')
    image.src=element.strMealThumb;
    image.setAttribute("class","mainImage")
   imageDiv.append(image)
    let infoDiv=document.createElement('div')
    infoDiv.style.marginTop="20px"
    let title=document.createElement('h1')
    title.innerText=element.strMeal

    let region=document.createElement('p')
    region.innerText-element.strArea
    region.setAttribute("id","region")

    let catergory=document.createElement('p')
    catergory.innerText=element.strCategory
    catergory.setAttribute("id","category")
      
    let description=document.createElement('p')
    description.innerText=` Instructions:
    ${element.strInstructions}`
    description.setAttribute("id","description")

    infoDiv.append(title,catergory,region,description)
    mainDiv.append(imageDiv,infoDiv)
    parent.append(mainDiv)
    })
 
};

// function main()

export {getDetails,appendData}