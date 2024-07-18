function run(){
    let codeHtml=document.querySelector(".ed #Code-Html").value;
    let codeCss="<style>"+document.querySelector(".ed #Code-Css").value + "</style>"  ;
    let codeJs=document.querySelector(".ed #Code-Js").value;
    let output=document.querySelector(".editor1 #output");
    output.contentDocument.body.innerHtml=codeHtml+codeCss;
    output.contentWindow.eval(codeJs);
    
}
    document.querySelector(".ed #Code-Html").addEventListener("keyup",run);
    document.querySelector(".ed #Code-Css").addEventListener("keyup",run);
    document.querySelector(".ed #Code-Js").addEventListener("keyup",run);
