
// 로그인 페이지 section
    
function loginCheck(){
    const id = document.querySelector('.user_id');
    const pw = document.querySelector('.user_pw');
    const link = document.write("<a href = 'index.html'" );
    if(id.value==""){
        alert("아이디를 입력하세요");
        location.href = "login.html"
    }
    else if(pw.value==""){
        alert("비밀번호를 입력하세요");
        location.href = "login.html"
    }
    else {
        confirm("로그인 하시겠습니까?");
        location.href = "index.html"             
    }
}
//회원가입 페이지
function joinform_check() {
    var uname = document.getElementById("uname");
    var uid = document.getElementById("uid");
    var pwd = document.getElementById("pwd");
    var repwd = document.getElementById("repwd");
    var mobile = document.getElementById("mobile");
    var email_id = document.getElementById("email_id");
  
      if (uname.value == "") {
      alert("이름을 입력하세요.");
      uname.focus();
      return false;
    };
    if (uid.value == "") { 
      alert("아이디를 입력하세요.");
      uid.focus(); 
      return false; 
    };
  
    if (pwd.value == "") {
      alert("비밀번호를 입력하세요.");
      pwd.focus();
      return false;
    };
  
    if (repwd.value !== pwd.value) {
      alert("비밀번호가 일치하지 않습니다..");
      repwd.focus();
      return false;
    };
  
    if (email_id.value == "") {
      alert("이메일 주소를 입력하세요.");
      email_id.focus();
      return false;
    }

    if (mobile.value == "") {
        alert("전화번호을 입력하세요.");
        mobile.focus();
        return false;      }
        else {
            let a = alert('회원가입이 완료되었습니다.')
            let b = window.location.href = 'index.html'
            return [a,b];
          };
    document.join_form.submit();
  }