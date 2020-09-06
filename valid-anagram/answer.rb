# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    if s.length != t.length
        return false
    end
    
    return true if s.bytes.sort! == t.bytes.sort!
    
    return false
end
