function readScore(){

    const element = document.getElementById("record").files[0];
    
    console.log(element);
    
    return;

    // const element = document.querySelector('#myFile');
    // const pEl = document.querySelector('.log');

    // 파일 선택 기능
    element.addEventListener('input', (event) => {
        const target = event.target;
        // 선택된 파일 참조
        const files = target.files;
        // 배열 타입이므로 0번째 파일 참조
        const file = files[0]
        
        // FileReader 인스턴스 생성
        const reader = new FileReader();
        // 읽기 작업 완료
        console.log(reader.result);
        // reader.addEventListener('load', () => {
        //     // 요소에 결과 출력
        //     // pEl.textContent = reader.result;
        //     console.log(reader.result);

        // });
        // 텍스트 파일 형식으로 읽어오기
        reader.readAsText(file);
    });

}





function printFile() {
    const reader = new FileReader();
    reader.onload = (evt) => {
      console.log(evt.target.result);
    };
    reader.readAsText('./score.txt');
 }

function recordScore(){
    writeFile("score.txt", "score");
}


function writeFile(name, msg){

	if(name == "") return false;

	var fileObject = new ActiveXObject("Scripting.FileSystemObject");
	var path = './score.txt';

    // 파일이 생성되어있지 않으면 새로 만들고 기록

	if(!fileObject.FileExists(path)){

		var fWrite = fileObject.CreateTextFile(path, false);
		fWrite.write(msg);
		fWrite.close();

	}else{

		var fWrite = fileObject.OpenTextFile(path, 8);
		fWrite.write(msg);
		fWrite.close();
	}

}