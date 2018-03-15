module.exports = function longestConsecutiveLength(array) {
  // your solution here
	var lnght = array.length;
	var sArray = array;
	var part = 1;
	var fullnght = 0;
	
	if(lnght > 1){
		sArray = array.sort(function (a, b) {
			return a - b;
		});
	}
	
	
	for (var i = 0; i < lnght; i++) {
    
		if(sArray[i]+1 == sArray[i + 1]) {
			part++;
		} 
		else if(sArray[i] == sArray[i + 1]) {
			continue;
			}
		else {
			fullnght = (fullnght > part) ? fullnght : part;
			part = 1;
		}
  }
  
  
  return fullnght;
}