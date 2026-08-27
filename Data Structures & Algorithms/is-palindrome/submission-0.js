class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase()
        let filteredStr = ""
        let revStr = ""
        for(let i = 0 ; i < s.length; i++) {
            if(s[i].match(/[a-z0-9]/i)) {
                filteredStr += s[i]
                revStr = s[i] + revStr
            }
        }

        // let revStr = s.split("").reverse().join("")
        return filteredStr === revStr
    }
}
