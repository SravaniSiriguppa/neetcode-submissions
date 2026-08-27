class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let mapST = new Map()
        for(let i = 0; i < s.length; i++) {
           if(!mapST.has(s[i])) {
            mapST.set(s[i], 1) 
            } else {
                mapST.set(s[i], mapST.get(s[i])+ 1)
            } 
        }
        for(let j = 0; j < t.length; j++) {
            if(mapST.has(t[j])) {
                mapST.set(t[j], mapST.get(t[j]) - 1)
            } else {
                return false;
            }
        }
        for(let [char, freq] of mapST) {
            if(freq !== 0) return false
        }
        return true
    }
}
