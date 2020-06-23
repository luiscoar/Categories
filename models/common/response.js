var response = 
{
	data : {}, 
	code:0,
	msg : "",
	detail : []
}

function reset()
{
	response.data = {};
	response.code = 0;
	response.msg = "";
	response.detail = [];
}

function SetResponse(data,code,msg,detail=null)
{
	reset();
	response.data = data;
	response.code = code;
	response.msg = msg;
	response.detail = detail;
	return response;
}

module.exports = {SetResponse};