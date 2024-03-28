document.getElementById('fileInput').addEventListener('change',function(){
    var file = this.files[0];
    if(file){
        alert('Selected file: '+ file.name)
    }

});