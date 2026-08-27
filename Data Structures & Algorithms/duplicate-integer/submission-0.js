class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map()
        for(let i = 0; i < nums.length; i++) {
            map[nums[i]] = !map[nums[i]] ? map.set(nums[i], 1) : map.set(nums[i], map.get(nums[i]) + 1)
        }
        for(let [char, freq] of map) {
            if(freq > 1){
                return true
            }
        }
        return false
    }
}
