function paramid(n) {
    for (let i = n; i >=1; i--) {
        str=""
        for (let j = 1; j <=i-1; j++) {
            str+=" "
        }
        for (let k = i; k <=n; k++) {
            str+=" *"
        }
        console.log(str);
    }
}