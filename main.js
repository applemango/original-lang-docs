function create_list(){
    var html = []
    for(var i=0;i<list_data().data.length;i++){
        if(list_data().data[i].type == "li"){
            html.push("<li title-data='"+list_data().data[i].search+"'><a href='"+list_data().data[i].url+"'>"+list_data().data[i].title+"</a></li>")
        }
        else if(list_data().data[i].type == "ol"){
            html.push('<details title-data-details="'+list_data().data[i].search+'"><summary>'+list_data().data[i].title+'</summary><ol style="--height: 9999px">')
            for(var j=0;j<list_data().data[i].data.length;j++){
                if(list_data().data[i].data[j].type == "li"){
                    html.push("<li title-data='"+list_data().data[i].data[j].search+"'><a href='"+list_data().data[i].data[j].url+"'>"+list_data().data[i].data[j].title+"</a></li>")
                }
                else if(list_data().data[i].data[j].type == "ol"){
                    html.push('<details title-data-details="'+list_data().data[i].data[j].search+'"><summary>'+list_data().data[i].data[j].title+'</summary><ol style="--height: 500px">')
                    for(var k=0;k<list_data().data[i].data[j].data.length;k++){
                        if(list_data().data[i].data[j].data[k].type == "li"){
                            html.push("<li title-data='"+list_data().data[i].data[j].data[k].search+"'><a href='"+list_data().data[i].data[j].data[k].url+"'>"+list_data().data[i].data[j].data[k].title+"</a></li>")
                        }
                    }
                    html.push('</ol></details>')
                }
            }
            html.push('</ol></details>')
        }
    }
    return html
}
function list_to_html(list){
    var html = "";for(var i=0;i<list.length;i++){
        html += list[i]
    }
    return html
}
const left_list = "<ol>"+list_to_html(create_list())+"</ol>"
const left = `<div class="search_box"><input type="text" class="search" name="search" required minlength="4" maxlength="" size="10" placeholder="search"><button class="search_btn_delete" onclick="search_value_set(null);search('');details_close_all()"><ion-icon name="close-outline"></ion-icon></button><button class="search_btn" onclick="search(document.querySelector('#left .search_box .search').value)"><ion-icon name="search-outline"></ion-icon></button></div>`+left_list
document.querySelector("#left").innerHTML = left;








function search_value_set(value) {const search_value = document.querySelector("#left .search_box .search").value;document.querySelector("#left .search_box .search").value = value;}
const search_box = document.querySelector("#left .search_box .search");
search_box.addEventListener('keyup', (event) => {search(event.target.value)});
search_box.addEventListener('change', (event) => {search(event.target.value)});
function search(value) {const list = document.querySelectorAll("#left ol li");for (let i = 0; i < list.length; i++) {const title = list[i].getAttribute("title-data");if (title.includes(value)) {list[i].style.display = "block";} else {list[i].style.display = "none";}}const details = document.querySelectorAll("#left ol details");for (let i = 0; i < details.length; i++) {const title = details[i].getAttribute("title-data-details");if (title.includes(value)) {details[i].style.display = "block";details[i].open = true;} else {details[i].style.display = "none";details[i].open = false;}}}
function details_open_all() {const details = document.querySelectorAll("#left ol details");for (let i = 0; i < details.length; i++) {details[i].open = true;}}
function details_close_all() {const details = document.querySelectorAll("#left ol details");for (let i = 0; i < details.length; i++) {details[i].open = false;}}
