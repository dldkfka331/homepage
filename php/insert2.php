<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?
        include_once "../connectDB.php";
        
echo "<pre>";
var_dump($_POST);

//아이디
if($_POST['userId'] == '' || $_POST['userId'] == null ){
    echo '아이디가 작성되지 않았습니다.';
    exit;
}
$userId = $_POST['userId'];
$userId = trim($userId);               //여백 제거
$userId = $dbConnect -> real_escape_string($userId);    //쿼리문의 ""  처리

//이름
if($_POST['userName'] == '' || $_POST['userName'] == null ){
    echo '이름이 작성되지 않았습니다.';
    exit;
}
$userName = $_POST['userName'];
$userName = trim($userName);               //여백 제거
$userName = $dbConnect -> real_escape_string($userName);    //쿼리문의 ""  처리
    
//비밀번호
if($_POST['userPw'] == '' || $_POST['userPw'] == null ){
    echo '비밀번호가 작성되지 않았습니다.';
    exit;
}
$userPw = $_POST['userPw'];

//핸드폰 번호
if($_POST['userPhone'] == '' || $_POST['userPhone'] == null ){
    echo '휴대전화 번호가 작성되지 않았습니다.';
    exit;
}
$userPhone = $_POST['userPhone'];
$userPhone = trim($userPhone);               //여백 제거
$userPhone = $dbConnect -> real_escape_string($userPhone);    //쿼리문의 ""  처리
    
//이메일
$emailChk = filter_var($_POST['userEmail'], FILTER_VALIDATE_EMAIL);
if($emailChk == false ){
    echo '이메일이 잘못 작성되었습니다.';
    exit;
}
$userEmail = $_POST['userEmail'];

//생일
if($_POST['userBirth'] == '' || $_POST['userBirth'] == null ){
    echo '생일이 작성되지 않았습니다.';
    exit;
}
$userBirth = $_POST['userBirth'];
$userBirth = trim($userBirth);               //여백 제거
$userBirth = $dbConnect -> real_escape_string($userBirth);    //쿼리문의 ""  처리
    
//성별
if($_POST['userGender'] == 'm' || $_POST['userGender'] == 'w' ){
   $userGender = $_POST['userGender'];
} else {
    echo '성별이 선택되지 않았습니다.';
    exit;
}

//쿼리문 
$sql ="INSERT INTO myMember(userId, userName, userPw, userPhone, userEmail, userBirth, userGender, regTime) VALUES('{$userID}','{$userName}','{$userPw}','{$userPhone}','{$userEmail}','{$userBirth}','{$userGender}', NOW() )";

//쿼리문 전송
$result = $dbConnect->query($sql);

if($result){
    echo "ok";
}else {
    echo "sorry";
}

    ?>
</body>
</html>