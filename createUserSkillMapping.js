(function(){
    var skills = (function(){
        var result = [];
        var skillsGr = new GlideRecord('cmn_skill');
        skillsGr.addActiveQuery();
        skillsGr.query();
        while(skillsGr.next()){
            result.push(String(skillsGr.getUniqueValue()));
        }
        return result;
    })();
    var r = new sn_ws.RESTMessageV2('Random User API', 'Default GET');
    var response = r.execute();
    var responseBody = response.getBody();
    var httpStatus = response.getStatusCode();
    var response = JSON.parse(responseBody);
    response.results.forEach(function(item){
        createUser(item.name.first,item.name.last,item.email,item.login.username,skills);
    })

    function createUser(firstName,lastName,userMail,userID,userSkills,userSkillLevel){
        var usrGr = new GlideRecord('sys_user');
        usrGr.initialize();
        usrGr.setValue('first_name',firstName);
        usrGr.setValue('last_name',lastName);
        usrGr.setValue('email',userMail);
        usrGr.setValue('user_name',userID);
        usrGr.setValue('name',firstName + ' ' + lastName);
        usrGr.setValue('u_registered_mentor',true);
        usrGr.setValue('u_active_mentor',true);
        var userRef = usrGr.insert();

        for(var i = 0; i <= 3; i++){
            var usrSkillGr = new GlideRecord('sys_user_has_skill');
            usrSkillGr.initialize();
            usrSkillGr.setValue('user',userRef);
            usrSkillGr.setValue('skill',userSkills[Math.floor(Math.random() * userSkills.length)]);
            usrSkillGr.insert();
        }
    }
})();