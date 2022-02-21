
//  헤더 스크립트
const toggleBtn = document.querySelector('.navbar_toogleBtn');
        const menu = document.querySelector('.navbar_menu');
        const icons = document.querySelector('.navbar_icons');

        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
            icons.classList.toggle('active');
        });

// 로그인 페이지 section


    
    function loginCheck(){
        const id = document.querySelector('.user_id');
        const pw = document.querySelector('.user_pw');
        const link = document.write("<a href = 'https://www.naver.com/'" );
        if(id.value==""){
            alert("아이디를 입력하세요");
        }
        else if(pw.value==""){
            alert("비밀번호를 입력하세요");
        }
        else {
            location.href = "https://www.naver.com"             
        }
    }
