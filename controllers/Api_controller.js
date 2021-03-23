// routes/Api_controller.js

// Model 미활용 CRUD 구성
// https://medium.com/@feedbotstar/node-js-%EB%A1%9C-crud-%EB%A7%8C%EB%93%A4%EC%96%B4-%EB%B3%B4%EA%B8%B0-cdcbaf7174a7

// Model 활용 CRUD 구성
// https://poiemaweb.com/mongoose


const User = require("../models/User");


// 새로운 정보 입력
exports.postNewuser = (request, response) => {
    // // Model 미활용 코드
    // User.create({
    //     _id: request.body._id,
    //     password: request.body.password,
    //     name: request.body.name
    // }, (error, user) => {
    //     if(error){
    //         response.status(500).send("User 생성 실패");
    //         return;
    //     }
    //     response.status(200).send(user);
    // });

    User.createUser(request.body).then(user => response.status(200).send(user))
    .catch(error => response.status(500).send("User 생성 실패"));
}

// 모든 정보 요청
exports.getAllusers = (request, response) => {
    // // Model 미활용 코드
    // User.find({}, (error, users) => {
    //     if(error){
    //         response.status(500).send("User 전체 조회 실패");
    //         return;
    //     }
    //    if(!users.length){
    //        response.status(404).send("User에 데이터 없음");
    //        return;
    //    }
    //     response.status(200).send(users);
    // });

    // find()는 반환값이 리스트이므로 if문에 length로 처리해야함
    User.findAllUser().then(users => {
      if (!users.length) return response.status(404).send("User에 데이터 없음");
      response.status(200).send(users);
    }).catch(error => response.status(500).send("User 전체 조회 실패"));
}

// 특정 id 정보 요청
exports.getSelectluser = (request, response) => {
    // // Model 미활용 코드
    // User.findById(request.params._id, (error, user) => {
    //     if(error){
    //         response.status(500).send("User 조회 실패");
    //         return;
    //     }
    //     if(user){
    //         response.status(200).send(user);
    //         return;
    //     }
    //     response.status(404).send("검색 대상이 존재하지 않음");
    // });

    User.findByUserid(request.params._id).then(user => {
        if (!user) return response.status(404).send("대상이 존재하지 않음");
        response.status(200).send(user);
    }).catch(error => response.status(500).send("User 조회 실패"));
}

// 특정 id 정보 갱신
exports.putSelectuser = (request, response) => {
    // // Model 미활용 코드
    // // new는 update 실행 후 결과 반환 여부
    // User.findByIdAndUpdate(request.params._id, request.body, {new : true}, (error, user) => {
    //     if(error){
    //         response.status(500).send("User 수정 실패");
    //         return;
    //     }
    //     if(user){
    //         response.status(200).send(user._id + " 수정 완료");
    //         return;
    //     }
    //     response.status(404).send("수정 대상이 존재하지 않음");
    // });

    User.updateByUserid(request.params._id, request.body).then(user => {
        if (!user) return response.status(404).send("대상이 존재하지 않음");
        response.status(200).send(user);
    }).catch(error => response.status(500).send("User 수정 실패"));
}

// 특정 id 정보 삭제
exports.deleteSelectuser = (request, response) => {
    // // Model 미활용 코드
    // User.findByIdAndRemove(request.params._id, (error, user) => {
    //     if(error){
    //         response.status(500).send("User 삭제 실패");
    //         return;
    //     }
    //     if(user){
    //         response.status(200).send(user._id + " 삭제 완료");
    //         return;
    //     }
    //     response.status(404).send("삭제 대상이 존재하지 않음");
    // });

    User.deleteByUserid(request.params._id).then(user => {
        if (!user) return response.status(404).send("대상이 존재하지 않음");
        response.status(200).send(user._id + " 삭제 완료");
    }).catch(error => response.status(500).send("User 삭제 실패"));
}