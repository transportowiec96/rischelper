/*function update_lang()
{
    var lang_id = document.getElementById('lang_choosen').value;
    var lang_strings = document.getElementsByClassName('lang_string');
    for(j = 0; j < lang_strings.length;j+=1)
    {
        lang_strings[j].innerHTML = langs[lang_id][findInLang(lang_strings[j].id)]
        
    }
}*/
function change_lab()
{
    for(x = 0; x < 8 ;x+=1)
    {
        document.getElementById('lab_'+x).style.display = 'none';
    }
    document.getElementById('lab_'+document.getElementById('choose_lab').value).style.display = 'block';
}
document.addEventListener('click',function(){
    var audio = new Audio('click.mp3');
audio.play();
})
function info()
{
    alert("Made by transportowiec96#4236. Message me if you found any discrepancies or have any ideas!")    
}