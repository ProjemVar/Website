Meteor.myAuthFuncs = {
	isEmailValid : function(mail){
		return /^[A-Z0-9'.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail);
	},
	isPasswordValid : function(pass){
		pass = pass.toString().trim();
		if(pass.length < 6)
			return {isErr : true,msg : "Pass To Short",password: pass.toString().trim()};
		return {isErr : false,msg : "Everything Ok",password: pass.toString().trim()};
	},
	comparePass : function(pass,repass){
		return (pass === repass);
	},
	isLogined : function(){
			return (Meteor.userId() != null);
	}
}
