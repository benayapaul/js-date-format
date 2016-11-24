var dt = {
	datePlace:new Date(),
	today:function(formatDate,separator) {
		
		var dateFormat = {'m':this.datePlace.getMonth()+1,'d':this.datePlace.getDate(),'y':this.datePlace.getFullYear()};
		
		data = formatDate.split(',');
		iLen = data.length;
			
		arr = new Array();		
		
		for(i=0;i<iLen;i++)
		{
			arr.push(dateFormat[data[i]]);
		}
		
		return arr.join(separator);
	}
}
