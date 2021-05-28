function getLizardName(){
    let lizardName = prompt('Name your pet Lizard');
    console.log(lizardName);
    document.write("<p>" + "My Lizard, " + lizardName);
}

function getLizardBeauty(){
    let lizardBeauty = confirm('Confirm that your lizard beautiful');
    console.log(lizardBeauty);
    
    if (lizardBeauty){
    document.write("<p>" + "has the most <i>LUMINOUS</i> scales" + "</p>")
}
    else{
    document.write("<p>" + "<i>DESPERATELY</i> needs a bath" + "</p>")
}
}

let lizardskeleton = "https://wpclipart.com/dl.php?img=/animals/L/lizard/lizard_2/Flying_Dragon_skeleton__Agamidea_T.png";

let lizardalive = "http://pngimg.com/uploads/lizard/lizard_PNG27.png";

let tinylizard = "http://www.clker.com/cliparts/X/X/b/G/3/e/gecko-sil-th.png";

function getLizardOnpage(){
    let lizardOnpage = prompt('Do you want to see your lizard?');
    console.log(lizardOnpage);
 
    while(lizardOnpage.toLowerCase() != 'yes' && lizardOnpage.toLowerCase() != 'no'){
        lizardOnpage = prompt('please answer yes or no');
    }
    if (lizardOnpage.toLowerCase() == 'no'){
        document.write("<p>" + "<b>AHHH!</b>" + "</p>");
        document.write("<img src=" + lizardskeleton + " id=\"lizardImage\" onclick=\"flipImage();\"/>")
    } 
    else {
        document.write("<img src=" + lizardalive + " id=\"lizardImage\" onclick=\"flipImage();\"/>")
    }
}

function getMoreLizards(){
    let numberOfLizards = prompt("How many other lizards do you want to see?");
    console.log(numberOfLizards);

    while (numberOfLizards > 10 || numberOfLizards <0){
        
        if (numberOfLizards > 10){
            numberOfLizards = prompt("We only have 10 lizards!  Please 10 or less");
        }
        else {
            numberOfLizards = prompt("No space lizards... please enter at least 0 lizards.");
        }   
     }

    for (let i=0; i < numberOfLizards; i++){
        document.write("<img src=" + tinylizard + ">");
    }
}

function flipImage(){
    let img = document.getElementById('lizardImage');
    img.style.transform = "rotate(45deg)"
}