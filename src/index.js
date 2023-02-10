module.exports = function check(str, bracketsConfig) {
    //додавати в масив відкриті дужки, якшо попадеться закрита то перевірити чи вона така сама як остання з відкритих,
    // і видалити її з масиву
    let arr=[];
    let elemNumb=0;
    for(let i=0; i<str.length; i++){
        for(let j=0; j<bracketsConfig.length; j++){
            if(str[i]==bracketsConfig[j][1]){
                if(arr[elemNumb-1]==bracketsConfig[j][0]){
                    arr.pop();
                    elemNumb--;
                } else {
                    arr.push(str[i]);
                    elemNumb++
                }
            } else {
                if(str[i]==bracketsConfig[j][0]){
                    arr.push(str[i]);
                    elemNumb++
                }
            }
        }
    }
    return arr.length==0;
}