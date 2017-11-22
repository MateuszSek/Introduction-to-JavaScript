$(document).ready(main);
function main(){
    function set(){
        let elements = document.getElementsByName("cssProperty");
        for (let i=0;i<elements.length;i++){
            document.getElementById("modify").style.cssText+=elements[i].getAttribute("id")+":"+elements[i].value;
        }
    }
    document.getElementById("but1").addEventListener("click", set);
    $("select").change(set);
}
