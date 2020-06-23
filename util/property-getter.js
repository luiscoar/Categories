function getProperties(json)
{
	var props = new Array();
	for (x in json) {
		props.push(x);
	}
	return props;
}

function validatorErroresParser(errors,schema)
{
	try{

		const props = getProperties(schema);
		let errorsMsg = new Array();
		for (x in props) {
			if(errors[props[x]] && errors[props[x]].message)errorsMsg.push(errors[props[x]].message);
		}
		return errorsMsg;
	}catch(err)
	{
		return [];
	}
}


module.exports = {validatorErroresParser};
