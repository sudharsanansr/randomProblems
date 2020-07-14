function addUserInput() {
    var required = ["priority", "operator"];
    var optional = ["warning_threshold", "error_threshold", "critical_threshold"];
    var errorSet = {
        required: [],
        nan: [],
        gthundered: [],
        ltzero: [],
        empty: [],
    };

    required.forEach(function(item) {
        if (g_form.getValue(item) == "") {
            errorSet.required.push(item);
        }
    });

    optional.forEach(function(item) {
        var value = g_form.getValue(item);


        if (isNaN(value)) {
            errorSet.nan.push(item);
        }
        if (value > 100) {
            errorSet.gthundered.push(item);
        }
        if (value < 0) {
            errorSet.ltzero.push(item);
        }
        if (value == "") {
            errorSet.empty.push(item);
        }
    });

    if (errorSet.empty.length > 0) {
        var fields = errorSet.empty;
        for (var i = 0; i < fields.length; i++) {
            alert(fields[i]);
            g_form.setValue(fields[i], 0);
        }
        delete errorSet.empty;
    }

    var msgMap = {
        required: "Required fields missing!",
        nan: "Not a valid number",
        gthundred: "Value can't be greater than 100",
        ltzero: "Value can't be less than 0",
    };

    var errorMsg = "";
    for (var keys in errorSet) {
        if (errorSet[keys].length > 0) {
            errorMsg += msgMap[keys] + ' : ' + String(errorSet[keys]) + '\n';
        }
    }

    if (errorMsg) {
        alert(errorMsg);
        return;
    }
	
	generatePayload();
	
	function generatePayload(){
		var ds = g_form.getValue('data_source_option');
		var dp = g_form.getValue('data_point_option');
		var key = ds+"."+dp;
		var input = g_form.getValue('user_input');
		
		var p = g_form.getValue('priority');
		var to = g_form.getValue('operator');
		var wt = g_form.getValue('warning_threshold');
		var et = g_form.getValue('error_threshold');
		var ct = g_form.getValue('critical_threshold');
		var obj;
		
		if(!input){
			obj = {
				priority : p,
				threshold_operator : to,
				warning_threshold : wt,
				error_threshold : et,
				critical_threshold : ct
			};
		}
		else{
			obj = JSON.parse(g_form.getValue('user_input'));
			if(typeof obj[key] === 'undefined'){
                obj[key] = {};
            }
            obj[keys]['priority'] = p;
            obj[keys]['threshold_operator'] = to;
            obj[keys]['warning_threshold'] = wt;
            obj[keys]['error_threshold'] = et;
            obj[keys]['critical_threshold'] = ct;
		}
        g_form.setValue('user_input',JSON.stringify(obj));
	}
}