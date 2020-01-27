# 뷰 정리 
'''
## ch1 
cli 2.x vs cli 3.x  
명령어 
2.x : vue init  '프로젝트 템플릿 이름' '파일위치'
3.x : vue create '프로젝트 이름' 


2.x  웹팩 설정 파일 
 2.x: 노출 O 
 3.x: 노출 x 
  따라서 3.0에선  웹팩을 설정하기 위한 별도의 처리가 필요함 (vueCli3 페이지 )

프로젝트 구성 
  2.x: 깃헙의 템플릿 다운로드 
  3.x : 플러그인 기반으로 기능 추가 
    
ES6 이해도 
 2.x: 필요 x
 3.x: 필요 O 



 main.js : 프로젝트의 구조를 파악할수 있는 js 파일 

'''
## ch2 
 axios :  Promise 기반 api를 제공 
    axios.get - > new Promise 객체를 반환 
      - config : axios config
      - data : axios Api 데이터 정보 
      - header : "" header 데이터 정보 
    then() 다음 response의 this 객체가 Vue 인스턴스를 바라보고 있지 않기 때문에 바인딩 문제로 화살표 함수를 사용하는것을 추천 
  
  lifeCycle hook 
  데이터 요청할때는
  create(),beforeMount()주로 사용

  mounted() 되고 나서 데이터를 요청을 하거나 , 배열에 데이터를 넣게 된다면 
  vue의 reative 시스템 때문에 화면이 다시 그려지게 됨  
     