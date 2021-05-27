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

function getLizardOnpage(){
    let lizardOnpage = prompt('Do you want to see your lizard?');
    console.log(lizardOnpage);

    if (lizardOnpage.toLowerCase() == 'no'){
        document.write("<p>" + "<b>AHHH!</b>" + "</p>");
        document.write("<img src=\"https://wpclipart.com/dl.php?img=/animals/L/lizard/lizard_2/Flying_Dragon_skeleton__Agamidea_T.png\" id=\"lizardImage\" onclick=\"flipImage();\"/>")
    }
    else {
        document.write("<img src=\"http://pngimg.com/uploads/lizard/lizard_PNG27.png\" id=\"lizardImage\" onclick=\"flipImage();\"/>")
    }
}

function flipImage(){
    let img = document.getElementById('lizardImage');
    img.style.transform = "rotate(45deg)"
}